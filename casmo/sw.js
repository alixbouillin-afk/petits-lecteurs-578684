// Service worker généré par scelle.sh (casmo chiffré) — ne pas éditer à la main.
const CACHE_APP = 'casmo-app-e3ff99b7e0dc';
const CACHE_AUDIO = 'casmo-audio-c54f0669b5de';
const FICHIERS_APP = [
  './index.html',
  './loader.js',
  './cles.json',
  './audio-casmo.json.enc',
  './casmo_data.js.enc',
  './casmo_game.js.enc',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './',
];
const FICHIERS_AUDIO = [
  './audio/0364e97982f6c994e2ad0ac1cee0dfd9.bin',
  './audio/04280d46761569d52d97d5000b5fb302.bin',
  './audio/04f59e3fd7b69829343b868f4e9aef35.bin',
  './audio/0818caad1ca8076e15e5e4ae3b064d66.bin',
  './audio/0a9a47e1756de1dd5119209b5ade6f43.bin',
  './audio/0c7424d223aa9018f7f781d87d0fdcbc.bin',
  './audio/0cb6b473690213178f585deff8973960.bin',
  './audio/0df09cdf3b2411142c6687fdaed8b904.bin',
  './audio/0ec90d17d5b45b7f9a698ece1df60a0f.bin',
  './audio/0f530e47119ab148b47ec1673c89db32.bin',
  './audio/10884dd0e646c99ba53fedb7cab32cc3.bin',
  './audio/10a513a3563ff782a16e85f06659014b.bin',
  './audio/11f1e767c2e9b6d1a2f4e17b3161bcb0.bin',
  './audio/1531cf7eeb0f0573ff559ce129c84ad1.bin',
  './audio/178632a44f1630bd3eeae747ff379c70.bin',
  './audio/1b7b77c68657cfe2d2f7c58fb5b48d43.bin',
  './audio/1b7d0380aada40224e7896ade9de1569.bin',
  './audio/2176dc23d98fcd34fbea83d4a96d1810.bin',
  './audio/22018d5c6d73c4838e76b478cde81efa.bin',
  './audio/2352fc7a0ef654b0d955038654ac6375.bin',
  './audio/236795545f1cd15e8abc0df0359fee5d.bin',
  './audio/23fd0b9491dd4b923fa4e4b3553893d6.bin',
  './audio/2895eba93ea73609e7a96d40030424bb.bin',
  './audio/2a5bff0d182a705e9daf1819ee902d0a.bin',
  './audio/2ab80a8a520dc843cf830924e0bed4b0.bin',
  './audio/2b4a566cb76ffbe05a437ce4a9e642a3.bin',
  './audio/2d10d312daae7d50f3545409e9fb8b34.bin',
  './audio/2d7cfcbd946d0e3185cfacac8807ccf1.bin',
  './audio/305e50d724a5555c5a8347edc96a8167.bin',
  './audio/3379a748216e2062f8d0fa6ad30f6dce.bin',
  './audio/37d57ace0df11d23030350b4a4d74f08.bin',
  './audio/39f62e055b49f770b54c15609c8d19c7.bin',
  './audio/3e3096024b80782fd4878a0b0ba8472f.bin',
  './audio/4106ef4a15863cad6a71421595c34660.bin',
  './audio/418d99483d6218c54873f4a22a490f6e.bin',
  './audio/431074104e917bad4709a8fc40082a4c.bin',
  './audio/459661fdb216f45b41b048f15b79b6b4.bin',
  './audio/488500dc6c4a4f2d8b1f8b49ceb3b980.bin',
  './audio/4ace911363ac2e144824cb19730a35b0.bin',
  './audio/4c31417508757bbd9755b831279d21ec.bin',
  './audio/4e1ceab13481fe3de08fd7311ffcc9d2.bin',
  './audio/4ead58be7b9e665b9d5a7864862c7671.bin',
  './audio/4ee52a0c6a22315895f21dbc33646ce2.bin',
  './audio/53bb5c4337d43747a2fd803b24ed2319.bin',
  './audio/56216bb56c3bfb8d13e9d7c7641ccfc2.bin',
  './audio/562feea2fe8ed8e0e154b9163ca2319a.bin',
  './audio/59d007e76c04539e083e4d52243cc87c.bin',
  './audio/5ae266db5a32f93fc1675ecdf47e4086.bin',
  './audio/6bb90f527a07f0cd943b2c32257d32f4.bin',
  './audio/6bed763e1a0871f4f5d87135e90d70fe.bin',
  './audio/6e481f923caefddae3060af15974fa7d.bin',
  './audio/6ebba8cf1278a88835827adb89787d29.bin',
  './audio/6f94315dc7604917a8b941564613ea77.bin',
  './audio/700a5019551f7832bcf8c366e6048f57.bin',
  './audio/713db01927621991d5ff870295c83977.bin',
  './audio/76616d8bc297617ff408b08e3e0066e5.bin',
  './audio/76aaa78c8feda4e1d2b96446e949f8a6.bin',
  './audio/799c9405e3125b36452bdc59ff77e54d.bin',
  './audio/7b18eec944e1e888118dba3eb782f965.bin',
  './audio/7b5c0fb7ead19b84b5248bb4221c101a.bin',
  './audio/7c14e258a3b3383faddd6dcc037e15fc.bin',
  './audio/7eff2f9cb2374e49f12f418be00cba94.bin',
  './audio/80076bc44c08694f6727d27f09f778a0.bin',
  './audio/8050f3ca73d5b221b39e548c273f7fb5.bin',
  './audio/81102f84a298bdc2c4a6012b4e4c306a.bin',
  './audio/81150b127b960cebd1f85cfb738bf9dd.bin',
  './audio/81e64dcd01069a470c316032ce6143e2.bin',
  './audio/82ff7e480e4573aca401ba3347738c69.bin',
  './audio/8520069fd3d1062e0f6d44abe659ac42.bin',
  './audio/8768233808b6518e52c449b4359a1dc2.bin',
  './audio/89e6245f1fad9c4df7afbd1498111339.bin',
  './audio/908b99ed22a70a6e887ac9db12934c91.bin',
  './audio/91517cccffb1ca9c4d94b4a972e66251.bin',
  './audio/918b9e21b6e36c697c20995ec0e25d98.bin',
  './audio/9315edeac9a8f4c476f19ccb39b2afb7.bin',
  './audio/9499bbcfe1abb01ace5ebc4d29694d68.bin',
  './audio/94c412a83b2e35436ec57c0b565714d0.bin',
  './audio/9616d17f648c793090acd77c16dcd670.bin',
  './audio/96acf2470c4e37c62f465fba39f5edec.bin',
  './audio/98b488763e6e0a70816702f0d4459e98.bin',
  './audio/9950d5eb31bd307271dab00f143860f2.bin',
  './audio/9b025a4f4d58b5a86f4f164753e247d7.bin',
  './audio/9b19fb426d557446f0ad97256b1024e4.bin',
  './audio/9b739472ddc23543cf8a720a1d828051.bin',
  './audio/9b7b58ecd519cecbcf6549277c4b56bb.bin',
  './audio/9c7418e1a3c21591ac4ff45469281c04.bin',
  './audio/9e7f0f46477c47300fffaf52333cde75.bin',
  './audio/9e84c7ba45e1eadb1c30d23a4ebc1f56.bin',
  './audio/a720f3bec32be1edc9b0c07f516ebc64.bin',
  './audio/ab6fdd957a97752e2138b56aa7b4e308.bin',
  './audio/ac6a7f87779cacd6496c933c18decd04.bin',
  './audio/aedc8291124b221ad5eaace0e68e097c.bin',
  './audio/b01dfd6ac569417090111e6e1ea34b44.bin',
  './audio/b1facdca80fcc7835cc0b795f2bcb812.bin',
  './audio/b5c8145d702afdb96975a22eec75770d.bin',
  './audio/b740f3bbcc28a9b046a524a6cbe8b67f.bin',
  './audio/b90f889f332613b84a382434cd8249c4.bin',
  './audio/bb17acecbcebb7cf5fcdf975aab80c5f.bin',
  './audio/bcefe284a1010cbb7b648735a3b7f2e2.bin',
  './audio/bd2f5a9499023019ffca278415e705d9.bin',
  './audio/bd3757680e8adee566aec0773932200b.bin',
  './audio/bde16eacd55c97957e3b6c9cba1b3da2.bin',
  './audio/bfc3f04837e0955da354fe721c1e6a35.bin',
  './audio/c244a8fd8e2741fd28b2bacfa7271a06.bin',
  './audio/c985d1cb9998ea07883bbea55b602bac.bin',
  './audio/cc0843b08c7d89d41cb056efa708b1a5.bin',
  './audio/cc6e98ee6ee7d6493c602f5086ef5f5f.bin',
  './audio/cfde3483d56507fedb8fe7b94d01c019.bin',
  './audio/d1e631731041130a1e4ed09b2844cbcd.bin',
  './audio/d23905b2020b6ae5a8ed8697bdcca2d1.bin',
  './audio/d302f5ca11e0c3206fe974bbe1d9f895.bin',
  './audio/d8d9441a40e7d7f05e8ffd9ce6e2907d.bin',
  './audio/d96c2310c300ee1f5693dbbdfb281b69.bin',
  './audio/e1e8884d3becb8f29b49eb56d6197392.bin',
  './audio/e243c804dc6a7bf465e0982dc5a806cf.bin',
  './audio/e3cf454ae3ec185703e91566288692de.bin',
  './audio/e42dbd952320fdcf12803b9566aac57d.bin',
  './audio/e586a3772a4a67daeae81bc5bfb15b74.bin',
  './audio/e7c9f524289b6d481aa51aac8ac9b09f.bin',
  './audio/eb0b4a11d335268f4a4a0a71c6b11594.bin',
  './audio/ebbabd190577a94c3711972d347ba37d.bin',
  './audio/eca5ba7efd578768a50756399e15f5ff.bin',
  './audio/ede610774c1dc9dc4a44d87888749491.bin',
  './audio/efe6749b8eacab3ee3e1d6f035186e4f.bin',
  './audio/f179f84500175bfe497d7977039c7b24.bin',
  './audio/f47665c9a1de493799643177fdc049dc.bin',
  './audio/f6b662dc3526bca2443101dd9add407b.bin',
  './audio/f88ce0f98f0e783dc9e60127e4e5c50d.bin',
  './audio/f89729adbdf26c895ce586c9d90ad3f0.bin',
  './audio/f89a28b392d0d351863b48063d040f24.bin',
  './audio/fcaa06384931701b3495ced63d9a10a8.bin',
  './audio/fcaf641534621753c62740a53d4019a0.bin',
  './audio/fdc8d5a9d84c17c7df8b745589787fe9.bin',
  './audio/fdcc4d9135425173bb8b6132bdd2af8b.bin',
  './audio/ffddc6218011601e4c1795605b92c15d.bin',
];
async function cacheComplet() {
  const app = await caches.open(CACHE_APP), audio = await caches.open(CACHE_AUDIO);
  const a = await Promise.all(FICHIERS_APP.map(async (f) => !!(await app.match(f))));
  const b = await Promise.all(FICHIERS_AUDIO.map(async (f) => !!(await audio.match(f))));
  return a.every(Boolean) && b.every(Boolean);
}
async function precacheAudio() {
  const audio = await caches.open(CACHE_AUDIO);
  const anciens = (await caches.keys()).filter((k) => /^casmo-audio-/.test(k) && k !== CACHE_AUDIO);
  const vieux = await Promise.all(anciens.map((k) => caches.open(k)));
  let lot = [];
  for (const f of FICHIERS_AUDIO) {
    lot.push((async () => {
      if (await audio.match(f)) return;
      // un clip déjà téléchargé est RECOPIÉ depuis l'ancien cache audio — à
      // nom ET empreinte (?v=…) identiques depuis le 07/10/2026 : une voix
      // modifiée n'y est plus trouvée et part au téléchargement (avant, le
      // seul nom suffisait et l'ancienne voix restait en place indéfiniment ;
      // version chiffrée : le nom opaque dépend déjà du contenu)
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
    await Promise.all(keys.filter((k) => /^casmo-(app|audio)-[a-f0-9]{12}$/.test(k) && k !== CACHE_APP && k !== CACHE_AUDIO).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'CASMO_SKIP') { self.skipWaiting(); return; }   // la page demande la mise à jour immédiate (hors partie)
  if (!e.data || e.data.type !== 'CASMO_CACHE_STATUS' || !e.ports[0]) return;
  e.waitUntil((async () => {
    let complet = false;
    try { complet = await cacheComplet(); } catch (err) {}
    e.ports[0].postMessage({ type: 'CASMO_CACHE_STATUS', complet, version: CACHE_APP + '+' + CACHE_AUDIO });
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
