// Service worker généré par scelle.sh (astronaute chiffré) — ne pas éditer à la main.
const CACHE_APP = 'astronaute-app-79e351f175f8';
const CACHE_AUDIO = 'astronaute-audio-b94a408238de';
const FICHIERS_APP = [
  './index.html',
  './loader.js',
  './cles.json',
  './audio-astronaute.json.enc',
  './data.js.enc',
  './game.js.enc',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './',
];
const FICHIERS_AUDIO = [
  './audio/006f5425d398344bfd150c7da41e488b.bin',
  './audio/00ab1705b4fbfda2b29066e485323fdd.bin',
  './audio/02e241ad1219daeef6234b6d5c1884ca.bin',
  './audio/0429066279e90637361a83f88ece80a4.bin',
  './audio/0449a3e7949fc198ebbc55e535491b81.bin',
  './audio/05f0f69abbd72c5a83b660c45e0dacc7.bin',
  './audio/05f51fc03ecc57cede775c516142f6a3.bin',
  './audio/0643e18d1b3d764ebf5fca1683320869.bin',
  './audio/07a5c92593e309bbb8984bb6f34fc752.bin',
  './audio/0ab1faa2b62556cda8a3060cfe8d7b2d.bin',
  './audio/0ac1611049ff0d0379670b7c681e306e.bin',
  './audio/0b2f84ebfb2bccc2d60e114ef647dc90.bin',
  './audio/10f34a9cce10ed050b0eaf093a4cb716.bin',
  './audio/1608584779e7d5751aaef99763d138a8.bin',
  './audio/16f7987a738e34cd78a32a9c60429d6e.bin',
  './audio/1811035a3a560549c919051c32b4fb92.bin',
  './audio/195d3e8074464a327d69a0e41ea2081e.bin',
  './audio/1b5c43ca9c27522e074fa44ed381f177.bin',
  './audio/1c4a805bc1ff298eb63c5a2794594908.bin',
  './audio/1e2ec6f2228547db024c5b4b072b1ca1.bin',
  './audio/1f5fa6afc3c3ddd245499a263a8214a6.bin',
  './audio/1fcf3ee967492b3954bbf464a6f2331a.bin',
  './audio/221c15e5c9342cb68a26f107097f70af.bin',
  './audio/254308cc3cdc63497eccf3b4b795d9fc.bin',
  './audio/2627ad4a25532543ec4ffadb55840c93.bin',
  './audio/29105e2c6e2d33035a9cd0590292a088.bin',
  './audio/29ed2f6034e112a5b9a49104f16c94b2.bin',
  './audio/2a0e21bf21a6b76d5b09f9db96a95769.bin',
  './audio/2a9763a8e2cd48a9fba0d4e12fee01d4.bin',
  './audio/2b838d8a67a8853d04ae2f8dc498bbc5.bin',
  './audio/2e4f5d5e02cee137a610b6f8970cad9d.bin',
  './audio/2efb5cf5386054906a061ba1ac9cbe70.bin',
  './audio/306c18f698b16d8d3e39ffd39e49498a.bin',
  './audio/31322183f26139166f53841f26068333.bin',
  './audio/34038001f3b4101d5d74419f540619ae.bin',
  './audio/36772642d9ceb7469b57d5b75b995bc6.bin',
  './audio/3a7818bd8a880a93a3c603d21769150e.bin',
  './audio/3a84f7c122e787c58dd10e1835aa6f56.bin',
  './audio/3c1759e8792526333d3b240def070d72.bin',
  './audio/3d14aa55b8dfb178073171b16c79be38.bin',
  './audio/3d51e34548671a9cf91823ed281f8ca5.bin',
  './audio/3da1cf80dbb03518c38047dc7b7a815b.bin',
  './audio/3f395075731919feb03eb00e23072390.bin',
  './audio/3febf93051661e04d0a947e7b85e0a27.bin',
  './audio/408c83ea3ea95a44f3ce875b18ef64eb.bin',
  './audio/41bdbc0f674db4747bde95e229a811b3.bin',
  './audio/43da34b3d774df3740ebb9cb8dcbf60b.bin',
  './audio/4509b3ceb3adde2e25f2d0a2561ded64.bin',
  './audio/46a000812441ece0370f816cbdae4fd7.bin',
  './audio/46d92f8c447850681911cee5b76960f3.bin',
  './audio/4889e47d8e907b8c98dd6d63bd9ff7ae.bin',
  './audio/48ae0a56a7727f290ea4403d213e0ed3.bin',
  './audio/4a9ac05e48f15b343777266dad182d8f.bin',
  './audio/4f58bc75365fcc39aeb171e17cf7909d.bin',
  './audio/4fa4247a47f9aa6b22ccee3a0242daeb.bin',
  './audio/50c37acf1b3f0257e27a552bd6d2e1d6.bin',
  './audio/54cd1c37bcbd2689c37c59f4f2d0f89c.bin',
  './audio/55351f2d8f5b18661069cc6205dd862f.bin',
  './audio/576fa85e11d0b37c047ea77c42a07dad.bin',
  './audio/5b7f364cd5e8b65a54808696dde87a8c.bin',
  './audio/5bc5995b42695f7d267d4433081d6dfd.bin',
  './audio/5c4f396ad6bdf4aaf11c3d74b2b9bce4.bin',
  './audio/5d9423835488856e14944530f7150406.bin',
  './audio/5ef1c337c7445a2595b2a3986cd751a9.bin',
  './audio/6050b3ab8aecf43826607f92bc08c065.bin',
  './audio/643824f552669148861f22d4d2b93133.bin',
  './audio/682d47c67fa5abb47324b98441a3b950.bin',
  './audio/687edb0a1ea2494c92499f2e6b84717c.bin',
  './audio/6888c6c5cd830c6334d898bcb9ef7f15.bin',
  './audio/6ad36e5ae4ed33a8bb2f3d8dafcfcd21.bin',
  './audio/6d6de4893794e86b688a0fda61ef41dd.bin',
  './audio/70288237a49f405b07e56e7423be7771.bin',
  './audio/71a4b1804fcc2bfeda35f18df486a310.bin',
  './audio/7249f6165a7d895e42501b08187be9da.bin',
  './audio/727f7ecc58a89a458408df87b767dea7.bin',
  './audio/730ca2606b38ab295a94c1e5f055f5f3.bin',
  './audio/77c1c99634176995c876844a0024b34d.bin',
  './audio/7841beba990d71b3e85b860aaee7174b.bin',
  './audio/78b878e50f291b34de6d48c984009e42.bin',
  './audio/7b4188d97ae3ba6eb06dfb879a72ac7b.bin',
  './audio/7ca6b6157b53159aec6e5e5738572847.bin',
  './audio/7d68d8df86b6abf995ca7a341d0945c0.bin',
  './audio/7e6c743e87f46352c15e45439bea3c41.bin',
  './audio/7e7c9dff6aa3cb081941ec603e50faa9.bin',
  './audio/80479d20ef03c4b7ca67264f31824aaf.bin',
  './audio/83ecbd579850bdb06478b679e6382a9c.bin',
  './audio/85295b307dda58c70deb8c3f04495953.bin',
  './audio/85e343e2642a78020030e0e71b2a7216.bin',
  './audio/88f6c4d4d0e2b81c1e41456698441801.bin',
  './audio/8b6aac71794f3e30abb0c740ed37c135.bin',
  './audio/8bd9935080899b28c50a9e6cd6d83223.bin',
  './audio/8c3967c18d6d00cb7b944e16e78581f7.bin',
  './audio/8c824c3606a97e778f5d134eb78347b2.bin',
  './audio/8cea0654c4d3df02dd67c89f5d99ebfe.bin',
  './audio/8e1ecffaebe27ad6e9eded08f6135a74.bin',
  './audio/8e8c4dc6d2e02c2bcca6e1027d52e855.bin',
  './audio/8f081943f69d98faeed3064deb02f04e.bin',
  './audio/8fd6405ea47881f1612d4129f7706863.bin',
  './audio/909bb1edeb243fc1d22788b495a2050c.bin',
  './audio/90b941612f72facebce6969f55edefe1.bin',
  './audio/92ef54d8883275f3ffe939c52ef05780.bin',
  './audio/93156d44163ee5a9325f4c0ce5087000.bin',
  './audio/932f22a7bb985d2fbac890164791b27a.bin',
  './audio/93cc1da64da3bfaa99c197b24aa90671.bin',
  './audio/96d80a038a803b48779cf1845d536d0e.bin',
  './audio/9801b93b88b4d28c8496d013ee5eacc3.bin',
  './audio/988f016b001228eda920823c417e475e.bin',
  './audio/98f7d171299f146315a65159b2d46ab7.bin',
  './audio/98f7d2166569f2cc815784b39946500a.bin',
  './audio/9904f268b8620e3db3c617e03bed1b52.bin',
  './audio/9b147c4088c337a7f69ee1ee36071459.bin',
  './audio/9d8cc288cf1da2a34c83dd27718273ff.bin',
  './audio/9e75e3d050119d5b5beb788b7dca90c5.bin',
  './audio/a0c7dd7eab777f38f7c2f60a0b50872d.bin',
  './audio/a486326d7284a974f23d8adf7faefe3b.bin',
  './audio/a4e6d6b7957aa78993b2964dd6890844.bin',
  './audio/a4edac28542849f2dcb6fd2e78496953.bin',
  './audio/a5befa53c71bf036998a694b284f2627.bin',
  './audio/a892d8e6d148782ceae236bd892e4801.bin',
  './audio/a8e28955ff1a4566f08adde6dc67d9e8.bin',
  './audio/a96ef6343dce9c1bbe300553a67f19b3.bin',
  './audio/ad90ecfa48ac3f93ddb72c4b7a4ba97c.bin',
  './audio/af792d6ac2b32082df8a17449119f654.bin',
  './audio/afc768be5013b79e8c10c45c3ba08a4b.bin',
  './audio/b33af2a0c72ad8e39c168f57c0375fa2.bin',
  './audio/b3e4a73ea2c2398f38cd2cf28b553d4d.bin',
  './audio/b435bdadd8f93cd2996253a6cad2f01c.bin',
  './audio/b488c6d2c203bd64cc5850942b07d154.bin',
  './audio/b4a0ca7dec29c7a414593514a0543e24.bin',
  './audio/b588a99474e66d6ec5ef3bec4e3efafd.bin',
  './audio/b62416c1cfc388bf86c627991ec412dd.bin',
  './audio/b6b179eceb545d9c373d2d7eb62cdf46.bin',
  './audio/b83e532f02b6997506cce2ddf90ffca4.bin',
  './audio/b9f62b9776a52b66cdc756610111f782.bin',
  './audio/ba171ecd7d958037502d708afa02e131.bin',
  './audio/bf238dad306ac05839dff4a50170d949.bin',
  './audio/bf74458bf1bd0600736446769121fab0.bin',
  './audio/c0feac003b8c6d393cfb16f286e0d85e.bin',
  './audio/c1ec5086ba382fdb4016cee06b67a77a.bin',
  './audio/c4e6d199a1227f8adbfaeef2a81c9aa3.bin',
  './audio/c54eb09bc48bfa86a766b6462c4eb58e.bin',
  './audio/c5dbaec11b05568ea477bdeb35f43aba.bin',
  './audio/c8229d51f18bb43ab6970c152e40c690.bin',
  './audio/c8f0b0f8f0f5211a08d816cf3c5135f6.bin',
  './audio/ca8b5f499515a52f4ccb745aac04299f.bin',
  './audio/cbf1ef6fdb56ae60e282a1894e5b371a.bin',
  './audio/ccd698eae9020afdfadb959a3465c431.bin',
  './audio/cce01f690eb58a649456c463d5efd177.bin',
  './audio/d5330a29f698a0f0626c86ebb3978615.bin',
  './audio/d688988fb3e80c0598b4e4aab9a55294.bin',
  './audio/d7e9000597db260ea9d3968545461c1d.bin',
  './audio/d994a577ea1f17dcf01c25a82e5512cb.bin',
  './audio/d99c773d4510afe9b300998386f1f915.bin',
  './audio/d9c112640ca83c6b0adf0f8af64c604b.bin',
  './audio/da1298ca615b370bb9064fdb5c54c130.bin',
  './audio/dafd1d53812f8d57ffae84bf3fecdc20.bin',
  './audio/db7d5771928f5b0bd5a92fc99005c7a4.bin',
  './audio/dcf8a77990453422b1e098fbe1eb94cc.bin',
  './audio/dd2adaaca952544230c50ba515b211c4.bin',
  './audio/de45cf3a19ee4d10becff7266bbdce5d.bin',
  './audio/deee0451f9c7680cd82882c6d2442b31.bin',
  './audio/df28827414de1af26a7a2e7cf8b73a79.bin',
  './audio/dffabc0992ba35953e8609a368acd181.bin',
  './audio/e064887707d61d1c729627fb50f86ac1.bin',
  './audio/e3c133baf2588abcbdd12f62d05e947f.bin',
  './audio/e6099a430c8d9a2242aaf9c694e9b04b.bin',
  './audio/eccfc3fcf7f499dafc78fe2190ae23d7.bin',
  './audio/ef08080ec9289db528ea2dfc17aabe9e.bin',
  './audio/ef57fefe3d20bc7b72803715f6c7248f.bin',
  './audio/f0c7f2a61c68585b06798ac6dfda8db4.bin',
  './audio/f300d8eafa22b7ca5b20979042794ce2.bin',
  './audio/f435ee14f0f3e0afa51f54eef8b83a95.bin',
  './audio/f55496502cc8bf1fba38aff7c8100ab3.bin',
  './audio/f682f4b74bdfb9307f45712c68a10ddf.bin',
  './audio/f7075b65bc1178836986eeb4959f87c8.bin',
  './audio/f7086f2997f96ce1b870aad298c54618.bin',
  './audio/f74508c16f0419579af99af2a99f104d.bin',
  './audio/f7f65a1bf2892df44fe898743a9b1305.bin',
  './audio/f84514885db3aace0acf3efd368c80ca.bin',
  './audio/fc4158869d9c6c9fa3c9a43d345b217d.bin',
  './audio/ffcbe64f83a3ec5f7dbac7bcf006e28d.bin',
];
async function cacheComplet() {
  const app = await caches.open(CACHE_APP), audio = await caches.open(CACHE_AUDIO);
  const a = await Promise.all(FICHIERS_APP.map(async (f) => !!(await app.match(f))));
  const b = await Promise.all(FICHIERS_AUDIO.map(async (f) => !!(await audio.match(f))));
  return a.every(Boolean) && b.every(Boolean);
}
// Un clip déjà téléchargé est recopié de l'ancien cache au lieu d'être
// retéléchargé, ce qui est tout l'intérêt des deux caches séparés. Depuis le
// 07/10/2026, il est identifié par son nom ET par l'empreinte de son contenu
// (?v=…, posée par le build) : un clip modifié — voix rognée, niveau réglé,
// réenregistrement — n'est plus trouvé dans l'ancien cache et part au
// téléchargement. Avant, l'identification par le seul nom laissait l'ancienne
// voix en place indéfiniment. (Version chiffrée : le nom opaque dépend déjà du
// contenu, la liste n'a pas de paramètre et ce code vaut tel quel.)
async function precacheAudio() {
  const audio = await caches.open(CACHE_AUDIO);
  const anciens = (await caches.keys()).filter((k) => /^astronaute-audio-/.test(k) && k !== CACHE_AUDIO);
  const vieux = await Promise.all(anciens.map((k) => caches.open(k)));
  let lot = [];
  for (const f of FICHIERS_AUDIO) {
    lot.push((async () => {
      if (await audio.match(f)) return;
      for (const v of vieux) { const r = await v.match(f); if (r) { await audio.put(f, r); return; } }
      const rep = await fetch(new Request(f, { cache: 'reload' }));
      if (!rep.ok) throw new Error('précache ' + f + ' : HTTP ' + rep.status);
      await audio.put(f, rep);
    })());
    if (lot.length >= 8) { await Promise.all(lot); lot = []; }   // 8 téléchargements à la fois
  }
  await Promise.all(lot);
}
self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const app = await caches.open(CACHE_APP);
    // atomique : un échec conserve l'ancien worker ; la nouvelle version attend la fermeture des anciennes pages
    await app.addAll(FICHIERS_APP.map((f) => new Request(f, { cache: 'reload' })));
    await precacheAudio();
  })());
});
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    if (!(await cacheComplet())) throw new Error('Précache incomplet');
    const keys = await caches.keys();
    // purge des seules versions de CE jeu : le préfixe protège les voisins
    await Promise.all(keys.filter((k) => /^astronaute-(app|audio)-[a-f0-9]{12}$/.test(k) && k !== CACHE_APP && k !== CACHE_AUDIO).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'ASTRO_SKIP') { self.skipWaiting(); return; }   // la page demande la mise à jour immédiate (hors partie)
  if (!e.data || e.data.type !== 'ASTRO_CACHE_STATUS' || !e.ports[0]) return;
  e.waitUntil((async () => {
    let complet = false;
    try { complet = await cacheComplet(); } catch (err) {}
    e.ports[0].postMessage({ type: 'ASTRO_CACHE_STATUS', complet, version: CACHE_APP + '+' + CACHE_AUDIO });
  })());
});
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith((async () => {
    const estAudio = url.pathname.includes('/audio/');
    const cache = await caches.open(estAudio ? CACHE_AUDIO : CACHE_APP);
    // la racine et index.html sont servis quels que soient les paramètres (?qa=…),
    // les clips aussi : le jeu les demande sans l'empreinte ?v= du précache
    const hit = await cache.match(e.request, { ignoreSearch: estAudio || url.pathname.endsWith('/') || url.pathname.endsWith('index.html') });
    if (hit) return hit;
    try {
      const rep = await fetch(e.request);
      const connu = (estAudio ? FICHIERS_AUDIO : FICHIERS_APP).some((f) => new URL(f, self.location.href).pathname === url.pathname);
      if (rep && rep.ok && connu) e.waitUntil(cache.put(new URL(url.pathname, url.origin).href, rep.clone()).catch(() => {}));
      return rep;
    } catch (err) {
      return Response.error();     // hors ligne et hors précache : échec net
    }
  })());
});
