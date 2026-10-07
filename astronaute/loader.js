"use strict";
// ============================================================================
// loader.js — seul code cryptographique des jeux publiés (06/10/2026).
// Copié tel quel par chiffre.mjs dans chaque dossier de jeu publié, à la place
// des deux balises <script> des données et du moteur, qui n'existent plus en
// clair en ligne. Paramètres lus sur sa propre balise :
//   data-jeu="labo|casmo|astronaute"  data-scripts="données moteur"
//   data-voix="paresseux" (le moteur télécharge ses clips à la demande :
//     Labo, Astronaute) ou "avance" (le moteur crée des new Audio(url) de
//     façon synchrone : Casmo — toutes les voix sont déchiffrées d'avance).
// Étapes :
//   1. enregistre le service worker tout de suite (le précache démarre
//      pendant que le parent tape le mot de passe) ;
//   2. cherche la clé du jeu sur l'appareil (IndexedDB, clé non extractible ;
//      repli localStorage si le navigateur refuse d'y ranger une CryptoKey) ;
//   3. sinon, écran « Va chercher un grand ! » + champ mot de passe :
//      PBKDF2 (600 000 itérations) → KEK → enveloppes de cles.json. Aucune
//      vérification à part : c'est l'échec AES-GCM qui fait verdict. Les clés
//      des TROIS jeux sont rangées d'un coup : sur un même navigateur, un seul
//      déverrouillage ouvre les trois (pas une icône installée sur iPad, qui a
//      son propre stockage) ;
//   4. déchiffre la table des clips, les données et le moteur, injecte les
//      deux scripts dans l'ordre (Blob) et expose window.SCELLE au moteur.
// Rien de déchiffré n'est écrit sur l'appareil par ce code : le clair vit en
// mémoire de la page. Le mot de passe n'est stocké nulle part.
// Schéma et constantes : voir chiffre.mjs — les deux doivent rester alignés.
// ============================================================================
(() => {
  const moi = document.currentScript;
  const JEU = moi.dataset.jeu, SCRIPTS = (moi.dataset.scripts || "").split(" "), VOIX = moi.dataset.voix || "paresseux";
  const NOMS = {
    labo:       { emoji: "🧪", titre: "Le Labo est fermé à clé.",        bouton: "Ouvrir le Labo" },
    casmo:      { emoji: "🦖", titre: "Casmo dort.",                      bouton: "Réveiller Casmo" },
    astronaute: { emoji: "🚀", titre: "La fusée est fermée à clé.",       bouton: "Ouvrir la fusée" },
  };
  const N = NOMS[JEU] || { emoji: "🔒", titre: "Ce jeu est fermé à clé.", bouton: "Ouvrir" };
  const BASE_IDB = "petits-lecteurs", MAGASIN = "lots", REPLI = "petits-lecteurs.cle.";
  const enc = (s) => new TextEncoder().encode(s);
  const S = crypto.subtle;
  const MSG_RESEAU = "Ce jeu n'a pas fini de s'installer : rebranche le WiFi une minute, puis réessaie.";

  // ------------------------------------------------------ 1. le worker ---
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    const inscrit = () => navigator.serviceWorker.register("sw.js").catch((e) => console.warn("Jeu : hors ligne indisponible", e));
    if (document.readyState === "complete") inscrit(); else window.addEventListener("load", inscrit);
  }

  // ------------------------------------------------- 2. clé sur l'appareil ---
  function base() {
    return new Promise((res, rej) => {
      const r = indexedDB.open(BASE_IDB, 1);
      r.onupgradeneeded = () => r.result.createObjectStore(MAGASIN);
      r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
    });
  }
  async function idb(mode, op) {
    const db = await base();
    try {
      return await new Promise((res, rej) => {
        const t = db.transaction(MAGASIN, mode), r = op(t.objectStore(MAGASIN));
        t.oncomplete = () => res(r && r.result); t.onerror = () => rej(t.error); t.onabort = () => rej(t.error);
      });
    } finally { db.close(); }
  }
  async function derive(klot) {
    const k = await S.importKey("raw", klot, "HKDF", false, ["deriveKey"]);
    return S.deriveKey({ name: "HKDF", hash: "SHA-256", salt: new Uint8Array(0), info: enc("petits-lecteurs/v1/enc") },
      k, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
  }
  async function cleRangee() {
    try { const v = await idb("readonly", (m) => m.get(JEU)); if (v && v.kenc) return v.kenc; } catch (e) {}
    try {
      const b = localStorage.getItem(REPLI + JEU);
      if (b) return derive(Uint8Array.from(atob(b), (c) => c.charCodeAt(0)));
    } catch (e) {}
    return null;
  }
  async function range(lot, klot, kenc) {
    try { await idb("readwrite", (m) => m.put({ kenc, le: Date.now() }, lot)); return; } catch (e) {
      console.warn("Jeu : clé non rangée dans IndexedDB, repli localStorage", e);
    }
    try { localStorage.setItem(REPLI + lot, btoa(String.fromCharCode(...klot))); } catch (e) {}
  }
  async function oublie() {
    try { await idb("readwrite", (m) => m.delete(JEU)); } catch (e) {}
    try { localStorage.removeItem(REPLI + JEU); } catch (e) {}
  }

  // ------------------------------------------------------ fichiers scellés ---
  async function ouvre(kenc, octets, chemin) {
    const u = new Uint8Array(octets);
    if (u.length < 34 || u[0] !== 80 || u[1] !== 76 || u[2] !== 82 || u[3] !== 49 || u[4] !== 1) throw new Error("format scellé inconnu : " + chemin);
    return S.decrypt({ name: "AES-GCM", iv: u.subarray(6, 18), additionalData: enc(chemin) }, kenc, u.subarray(18));
  }
  async function telecharge(url) {
    let r;
    try { r = await fetch(url); } catch (e) { e.reseau = true; throw e; }
    if (!r.ok) { const e = new Error("HTTP " + r.status + " " + url); e.reseau = true; throw e; }
    return r.arrayBuffer();
  }
  function injecte(texte, nom) {
    return new Promise((res, rej) => {
      const url = URL.createObjectURL(new Blob([texte + "\n//# sourceURL=" + nom + "\n"], { type: "text/javascript" }));
      const s = document.createElement("script");
      s.src = url;
      s.onload = () => { URL.revokeObjectURL(url); res(); };
      s.onerror = () => { URL.revokeObjectURL(url); rej(new Error("script " + nom)); };
      document.body.appendChild(s);
    });
  }
  // Casmo : toutes les voix déchiffrées avant de lancer le moteur, 8 à la fois,
  // avec une ligne de progression (premier lancement : téléchargement ~2 Mo).
  async function voixDavance(kenc, table, ecranAttente) {
    const ids = Object.keys(table), urls = {};
    let faits = 0, i = 0;
    const un = async () => {
      while (i < ids.length) {
        const id = ids[i++];
        const clair = await ouvre(kenc, await telecharge("audio/" + table[id] + ".bin"), JEU + "/audio/" + id + ".m4a");
        urls[id] = URL.createObjectURL(new Blob([clair], { type: "audio/mp4" }));
        faits++; ecranAttente(faits, ids.length);
      }
    };
    await Promise.all(Array.from({ length: 8 }, un));
    return urls;
  }
  async function lance(kenc) {
    const fichiers = await Promise.all(["audio-" + JEU + ".json.enc"].concat(SCRIPTS.map((f) => f + ".enc")).map(telecharge));
    const dec = new TextDecoder();
    const table = JSON.parse(dec.decode(await ouvre(kenc, fichiers[0], JEU + "/audio-" + JEU + ".json")));
    const textes = [];
    for (let k = 0; k < SCRIPTS.length; k++) textes.push(dec.decode(await ouvre(kenc, fichiers[k + 1], JEU + "/" + SCRIPTS[k])));
    let objets = {};
    if (VOIX === "avance") {
      const att = document.createElement("div");
      att.setAttribute("style", "position:fixed;inset:0;z-index:100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;" +
        "background:linear-gradient(160deg,#eef2ff,#dfe6fb);color:#26313f;font:600 20px -apple-system,'Segoe UI',sans-serif;text-align:center;padding:24px");
      att.innerHTML = '<div style="font-size:72px;line-height:1">' + N.emoji + '</div><div>Préparation des voix…</div><div id="serrure-progres" style="font-weight:400;font-size:16px"></div>';
      document.body.appendChild(att);
      try {
        objets = await voixDavance(kenc, table, (f, t) => { const p = att.querySelector("#serrure-progres"); if (p) p.textContent = f + " / " + t; });
      } finally { att.remove(); }
    }
    window.SCELLE = Object.freeze({
      ids: () => Object.keys(table),
      url: (id) => "audio/" + (table[id] || "absent-" + encodeURIComponent(id)) + ".bin",
      ouvre: (id, octets) => ouvre(kenc, octets, JEU + "/audio/" + id + ".m4a"),
      objet: (id) => objets[id] || "data:audio/mp4;base64,",
    });
    for (let k = 0; k < SCRIPTS.length; k++) await injecte(textes[k], SCRIPTS[k]);
  }

  // ------------------------------------------------ 3. écran du mot de passe ---
  // Rend les clés de TOUS les lots que ce mot de passe ouvre ({ jeu: octets }).
  async function essaie(phrase) {
    const cles = await (await fetch("cles.json")).json();
    const pb = await S.importKey("raw", enc(phrase.trim().normalize("NFC")), "PBKDF2", false, ["deriveKey"]);
    const kek = await S.deriveKey({ name: "PBKDF2", hash: "SHA-256", salt: Uint8Array.from(atob(cles.sel), (c) => c.charCodeAt(0)), iterations: cles.iterations },
      pb, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
    const ouverts = {};
    for (const serrure of Object.values(cles.serrures || {})) {
      for (const [lot, env] of Object.entries(serrure)) {
        const u = Uint8Array.from(atob(env), (c) => c.charCodeAt(0));
        try {
          ouverts[lot] = new Uint8Array(await S.decrypt({ name: "AES-GCM", iv: u.subarray(0, 12), additionalData: enc("cles/" + lot) }, kek, u.subarray(12)));
        } catch (e) { /* enveloppe que ce mot de passe n'ouvre pas : suivante */ }
      }
    }
    return ouverts;
  }

  function ecran(message) {
    const el = document.createElement("div");
    el.id = "serrure";
    el.innerHTML = `
<style>
  #serrure { position: fixed; inset: 0; z-index: 100; display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 2vmin; padding: 24px; text-align: center; background: linear-gradient(160deg, #eef2ff, #dfe6fb);
    color: #26313f; font-family: "Chalkboard SE", "Comic Sans MS", "Arial Rounded MT Bold", -apple-system, "Segoe UI", sans-serif; overflow: auto; }
  #serrure .serrure-emoji { font-size: clamp(64px, 16vmin, 140px); line-height: 1; }
  #serrure .serrure-titre { font-size: clamp(26px, 5.5vmin, 46px); font-weight: 700; margin: 0; }
  #serrure .serrure-grand { font-size: clamp(18px, 3.4vmin, 26px); margin: 0; }
  #serrure form { margin-top: 3vmin; padding: 16px 18px; border-radius: 18px; background: #fff; border: 3px solid #9fa8da;
    width: min(440px, 100%); display: flex; flex-direction: column; gap: 10px; font-family: -apple-system, "Segoe UI", sans-serif; font-size: 15px; text-align: left; }
  #serrure label { font-weight: 600; }
  #serrure .serrure-ligne { display: flex; gap: 8px; }
  #serrure input { flex: 1; min-width: 0; font-size: 17px; padding: 10px 12px; border-radius: 10px; border: 2px solid #c5cae9;
    -webkit-user-select: text; user-select: text; touch-action: auto; }
  #serrure button { font-size: 16px; padding: 10px 14px; border-radius: 10px; border: 2px solid #5c6bc0; background: #fff; color: #26313f; cursor: pointer; }
  #serrure button[type=submit] { background: #5c6bc0; color: #fff; font-weight: 700; flex: 1; }
  #serrure button:disabled { opacity: .5; }
  #serrure .serrure-petit { color: #556; font-size: 13px; margin: 0; }
  #serrure .serrure-erreur { color: #b3261e; font-weight: 600; min-height: 1.2em; margin: 0; }
</style>
<div class="serrure-emoji">${N.emoji}</div>
<p class="serrure-titre">${N.titre}</p>
<p class="serrure-grand">Va chercher un grand !</p>
<form autocomplete="on">
  <label for="serrure-mdp">Pour les parents : le mot de passe reçu avec le lien</label>
  <input type="text" name="username" value="Les petits lecteurs" autocomplete="username" hidden>
  <div class="serrure-ligne">
    <input id="serrure-mdp" type="password" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" required>
    <button type="button" id="serrure-voir" aria-label="Voir le mot de passe">👁</button>
  </div>
  <div class="serrure-ligne">
    <button type="button" id="serrure-coller">Coller</button>
    <button type="submit" id="serrure-ok">${N.bouton}</button>
  </div>
  <p class="serrure-erreur" id="serrure-erreur" role="alert"></p>
  <p class="serrure-petit">Le même mot de passe ouvre les trois jeux. À taper une fois dans ce navigateur, et une fois par jeu installé sur l'écran d'accueil (l'iPad donne à chaque icône son propre coffre).</p>
</form>`;
    document.body.appendChild(el);
    const champ = el.querySelector("#serrure-mdp"), ok = el.querySelector("#serrure-ok"), err = el.querySelector("#serrure-erreur");
    if (message) err.textContent = message;
    el.querySelector("#serrure-voir").addEventListener("click", () => { champ.type = champ.type === "password" ? "text" : "password"; });
    const coller = el.querySelector("#serrure-coller");
    if (!(navigator.clipboard && navigator.clipboard.readText)) coller.hidden = true;
    coller.addEventListener("click", async () => { try { champ.value = (await navigator.clipboard.readText()).trim(); champ.focus(); } catch (e) {} });
    el.querySelector("form").addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!champ.value.trim()) return;
      ok.disabled = true; ok.textContent = "Vérification…"; err.textContent = "";
      try {
        const ouverts = await essaie(champ.value);
        if (!ouverts[JEU]) { err.textContent = "Ce n'est pas le bon mot de passe."; return; }
        let kenc = null;
        for (const [lot, klot] of Object.entries(ouverts)) {
          const k = await derive(klot);
          await range(lot, klot, k);
          if (lot === JEU) kenc = k;
        }
        el.hidden = true;
        await lance(kenc);
        el.remove();
      } catch (x) {
        console.warn("Jeu : ouverture impossible", x);
        el.hidden = false;
        err.textContent = MSG_RESEAU;
      } finally { ok.disabled = false; ok.textContent = N.bouton; }
    });
    setTimeout(() => champ.focus(), 50);
  }

  // ---------------------------------------------------------- démarrage ---
  (async () => {
    const kenc = await cleRangee();
    if (!kenc) return ecran();
    try { await lance(kenc); }
    catch (e) {
      if (e && e.name === "OperationError") { await oublie(); return ecran("Le mot de passe a changé : retape-le."); }
      console.warn("Jeu : démarrage impossible", e);
      ecran(e && e.reseau ? MSG_RESEAU : "");
    }
  })();
})();
