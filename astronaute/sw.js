// Service worker généré par scelle.sh (astronaute chiffré) — ne pas éditer à la main.
const CACHE_APP = 'astronaute-app-a81696704edd';
const CACHE_AUDIO = 'astronaute-audio-46a5da06114d';
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
  './audio/008eb9c900c7f4aa2a42524b4df5f3d4.bin',
  './audio/025a2f5b4bc5073b5050a772afcf2edf.bin',
  './audio/047fddfd5a55da83b4637c98d752b1ea.bin',
  './audio/04839b8c782875f8b880845927206251.bin',
  './audio/061fe44d96e56d4ff4c30a2570d589bd.bin',
  './audio/092877531cd3863a538ea0c807c9a0d5.bin',
  './audio/097177adc14bd9f476b80734ed39f441.bin',
  './audio/0988c4b0b958b355503fde8bca33c995.bin',
  './audio/0b23a2055062eac91204ea3b3e7dab8a.bin',
  './audio/0b5ab8855c1969d7620ab65dbc709f42.bin',
  './audio/0bf70acfd4099fe7173ee5db72379f84.bin',
  './audio/0d328a9ab1f52bcf7fc3486e69c88913.bin',
  './audio/0e6fe5e2ad31c68974dff9225404962e.bin',
  './audio/0f23d8ef20ea4c69e07c125ce52740f7.bin',
  './audio/0fa712313a8fc085c7b0081caf682b64.bin',
  './audio/0fac0200e0c520aaeca3f151267ecb0a.bin',
  './audio/12496e235cd93ca184ab83e6f19bd33a.bin',
  './audio/148bf677e6aa02b0b7a8c5878931424b.bin',
  './audio/14d33a1290e479b116bcbcaf9024ae64.bin',
  './audio/158e0f56cf0485ba3706ccf021786bf1.bin',
  './audio/180c1304ad853f3ee4146d5d254af08b.bin',
  './audio/1bd36c227d5bff0201ed4c0490e80b18.bin',
  './audio/1c0468975a16b317362015eea62b2442.bin',
  './audio/1d34296489ca4f264b58b08125723ea5.bin',
  './audio/1e83679c16bd83b6c4e41273265adb3f.bin',
  './audio/1f384469a54c860ccbe8a79bf30d2bc1.bin',
  './audio/1f5aac481a684c552153156652c9f395.bin',
  './audio/1fe33e4202bae34c1decb9c2330fd4b0.bin',
  './audio/20d15fa96ddb170d74125a9d21e8db4f.bin',
  './audio/21ccbc3107968ce3e74b8442ccfaf554.bin',
  './audio/224638b45b8e557fdded2122d4855a78.bin',
  './audio/230541b7a773e95b4965205b3ddc46a3.bin',
  './audio/23d6ace50a0b3bae239899255613087c.bin',
  './audio/274ebb89755213dec96c70a1b65a56d1.bin',
  './audio/28208192a276e59a7956b21dbe698974.bin',
  './audio/2cafb8c45e7b65044f490cce23aa4e09.bin',
  './audio/2e86d58e795a38a16047dbbc2fdf18ec.bin',
  './audio/2f09dc1a71a886417d51bb8dbea5ac77.bin',
  './audio/304207039353219f17d2cbc725d00cfd.bin',
  './audio/307cfc80ac846bc35ffbc9082f84f45a.bin',
  './audio/3135e1a31757601aa322cc8bcb4f95ee.bin',
  './audio/321e4b52651bbb61ce4724667aed98db.bin',
  './audio/32e447dd14c6b3e1fa8555e856c30b89.bin',
  './audio/35bfc385b3803d3b6d436fe0ec5d064a.bin',
  './audio/3a45c241b7bd5e954c4041431bbf5c46.bin',
  './audio/3c913d71428935f44257fba269c85c00.bin',
  './audio/3d3f1cb19a084ef428c77d243308e9e5.bin',
  './audio/3deb41fab962b869afcb697191a90bff.bin',
  './audio/3e6cfc5cc635b249ee71345cc2f40717.bin',
  './audio/4023d235fb6f17542e0d0085a664f59e.bin',
  './audio/409173ea0d612d81f6c9b90081074bdd.bin',
  './audio/40d33cb22e87ccd6fbb053de1c764b0b.bin',
  './audio/45febd043723e5cb7377895f854df2a6.bin',
  './audio/48f6ad5577c289e8fbecf35408a1a16a.bin',
  './audio/4982df02c904b5c7f1c6b3a916f92b7b.bin',
  './audio/4ad648e6b5e19ec519e7deb9668f2a66.bin',
  './audio/4d17d3652ee2b74acf65edfade00db48.bin',
  './audio/4df7412013dea6ba976c5468ce2d7e0b.bin',
  './audio/4e92a8379c714c62b3a56c9a28657706.bin',
  './audio/523f853307b8beb8dfa2f6fee5355440.bin',
  './audio/527f15c4e7a9425079996d400bf1e7f2.bin',
  './audio/538f5f8826edfeafda5191f692a77f32.bin',
  './audio/53cbd1344403fed5bb49a56308a16c50.bin',
  './audio/5480e5b0ea168fd3379b9891838ac445.bin',
  './audio/559d63adf8114e60bc707f03e6091518.bin',
  './audio/56caf9075f580899f67984c69b921dcc.bin',
  './audio/5beec74e34a243edb58b8eba3ccea611.bin',
  './audio/5d4ea88565415b5c3c95293db5383e81.bin',
  './audio/5d94f748f52324442612814313aaad7c.bin',
  './audio/5fb1fc2043e1c835984a974095980553.bin',
  './audio/613e7a0a19664df3685182e3ef9a0706.bin',
  './audio/61488dade2394e3d4f121fc66249c72b.bin',
  './audio/61a39b65584b2a1a839d47b7d712147a.bin',
  './audio/628e1287556a84eab3f7904409fa9a17.bin',
  './audio/62f9043b955f3b1b046105bcecca4731.bin',
  './audio/6350147838f9c34ef07f0b5f59dafaa7.bin',
  './audio/64b27e2d53905f5d27b0745c166b66e5.bin',
  './audio/66eeeafac6ab56f18f746a8b6bd91473.bin',
  './audio/670373113b3159cff3a1717eb9604782.bin',
  './audio/6982611e8f05beca8cc0fadf251b557f.bin',
  './audio/69b9cfaa1263b93e93e74272ea80d37f.bin',
  './audio/6a8af9e915ccc6180222dd1fd75cdf26.bin',
  './audio/6d28fdc50ea5ddd8f1f4af7cd666ed00.bin',
  './audio/6dbe95e536da992e584400a9aa464b34.bin',
  './audio/6e564c845a44e08e2825d5836e7c7436.bin',
  './audio/6e5bc3c2e011e68fd72620729961fd21.bin',
  './audio/6f14fca770f088481105a08371aefb07.bin',
  './audio/74c993b9a7005b1223cf3965237b8d85.bin',
  './audio/77b7188d6d2a0faffe43b790496b0dad.bin',
  './audio/785926e3e3a46ffe4c1563215bf82e83.bin',
  './audio/78c60bf32a545badb08f94aa5b66b77c.bin',
  './audio/7a66db557d336368a15adc6f5afe035a.bin',
  './audio/7d7527a629db381f5194430507c55a73.bin',
  './audio/7dc32112c9e9094eeb7586a1351b43ac.bin',
  './audio/812976f502b5cef10b3e333b76a9455e.bin',
  './audio/812efa2d6dbcc7fcc62648cfa87a9f71.bin',
  './audio/82a81335acc9152330ae1bdcd24f6b79.bin',
  './audio/886e561887453e38d8e004985083e7f2.bin',
  './audio/8b1d2ef24751abd4b072999b33bbb558.bin',
  './audio/8b73e6c7697ce9a577af31fb1190f2a2.bin',
  './audio/8ef71a21e46dbd9bbe68bf0eaae2bd29.bin',
  './audio/91a93e5343378b4f2641aae65d1671cc.bin',
  './audio/92aa4bb923eeae4d035de5c06ac71f5a.bin',
  './audio/94be525d9b241c3b6462ec7689be9165.bin',
  './audio/989264301353270010f24f041927705f.bin',
  './audio/9bbc846db617fa44b6bcfd3de3ff7a3c.bin',
  './audio/9c0593c17734bb5a08497495f4a35a1d.bin',
  './audio/9caf2b4a64b5a10e14e156613e101371.bin',
  './audio/9ce13c36f44210d6f2d50e06827df88a.bin',
  './audio/9e323fc7377fefffe241bcbb5ed3428b.bin',
  './audio/9f3411ed7dbca7f20f30c515d431e735.bin',
  './audio/a14d583945bb387127f4fc5a65d2d187.bin',
  './audio/a3b3de51a7aa3acd50b3bf78dcbc923a.bin',
  './audio/a3d2977a3cc47d5bc1153170866bf61a.bin',
  './audio/a4872cd7ce16cecdd2f6b79c93f60753.bin',
  './audio/a717aa024c0946248fd94b8bd37fe68b.bin',
  './audio/a7c39ad0bd5bc89c44250e9b65b7d363.bin',
  './audio/a88401725fa2560b2859a4bc2cb59c63.bin',
  './audio/a9a3c3ac6a59fc3e5d1ef223470bc157.bin',
  './audio/aa51f2aac6dff3130b571df2fc15f372.bin',
  './audio/acdb6d1410c925a030116e8f58fab011.bin',
  './audio/adacba4baa5e8a6773ae59f1bc0e9b3a.bin',
  './audio/b073e8922232192037c1a9f5ee82ff33.bin',
  './audio/b0facbfd24ad6af26de82033245235b7.bin',
  './audio/b206a72d1dbd659975c691800b4c364e.bin',
  './audio/b4d04f17a41351c6a4fdab7b2f16a08c.bin',
  './audio/b7529c45ea84bd56474bf2527a1e44f4.bin',
  './audio/b9d9f8784f98fa6f0a6ec815f85a3e15.bin',
  './audio/ba2d02ed47056f0d0f0fe3303fa19000.bin',
  './audio/bb3baf87b121b7ee6af0a650774afb58.bin',
  './audio/bb80c0153e11d79a3a9e1e3f936032ef.bin',
  './audio/bbbba9c88c5096c8698aedab729e6c61.bin',
  './audio/bc339a3db484837329076ffe3c38e9c5.bin',
  './audio/be9e2d497f524ed0cadd380b28a9f837.bin',
  './audio/c1786ec9887e302bcde921996451106a.bin',
  './audio/c23ebf91c0345a1afe8dc3dd5e2d5001.bin',
  './audio/c26fa0240a3ac63a991dca5d8d7899be.bin',
  './audio/c2b0a876730d7631fdb77680839379ad.bin',
  './audio/c49a3daa47741457e7db7452be7874c9.bin',
  './audio/c70e4d46271c355e7382f164e7c9306a.bin',
  './audio/c7ad2f9d282aca99fc1d5813059f2710.bin',
  './audio/c8dec71fab218e37f464d896fceff74c.bin',
  './audio/c9198468e26598251ae48678a081b0cd.bin',
  './audio/cb31d4119b843f0ffa3d0a4deadbd4f3.bin',
  './audio/cb813b2613cd3c79d8c21d8ee7c9f9d3.bin',
  './audio/cd197481ad1f69ad234e4b5584c58ab6.bin',
  './audio/ce0df99d7857885d46327a2cadbc6f6a.bin',
  './audio/cf1e899b9a7b7c195b5972a1a32b1276.bin',
  './audio/cf7f8a014490815857e7b8bb979dc1bd.bin',
  './audio/cfaca3f6c01b8e78e12b955126a49934.bin',
  './audio/d3fef7d4654cbe2f4d3f6d474cca8864.bin',
  './audio/d58d7b196e2d1248756a802cad7ebf5e.bin',
  './audio/d7b75774cadb600e539258a8660989b2.bin',
  './audio/dbfb8c6c060f8d00b4884bea85b96121.bin',
  './audio/df1ebadb4c0a4551b1ec09868e09ad92.bin',
  './audio/df9d86fe41bb62818bbaf500ca0f16a8.bin',
  './audio/e0d71ae6eeb6e260fb0fbd34465bcff7.bin',
  './audio/e2d110d38ec0eada1f497e9c6ccd733b.bin',
  './audio/e2fb9ca0c198f7f14d282b90ad7960b6.bin',
  './audio/e3c31bca39f57d2e336e4c9c9d0236e3.bin',
  './audio/e6f4330bc53b3c4274dc48abb80a5c33.bin',
  './audio/e70680c83c31d8eac2e6a572e6bd3c28.bin',
  './audio/eaa0a030b9e13c36801e067565869171.bin',
  './audio/efd385ad46269e96d738ca1389595048.bin',
  './audio/f123c421c11d77daa73e12539c11e575.bin',
  './audio/f123e5b90342daa0eb861e5ec88d5796.bin',
  './audio/f16c6e9446c12f06b66385d0c602043d.bin',
  './audio/f1b35b3853edd75b7bad1bc4dcc21368.bin',
  './audio/f338b3cc8621c2b48a8c2f917bad71e1.bin',
  './audio/f4e494e2d4e1a1cf2b730ec1562be836.bin',
  './audio/f5a60084ec0b58cb6dc4bbf2d366b6a0.bin',
  './audio/f758af2491f0905adb0f0e4cf4c3de0e.bin',
  './audio/f7a0e9d99e8cef3795db9487f00e1290.bin',
  './audio/fa66a32534986e944d27f0e0e355066c.bin',
  './audio/fbadf1b614b21ae766e28650f535fc0d.bin',
  './audio/fbc831cc1a71b08947eef69f61e69e95.bin',
  './audio/fbc90cdc4883022a8cb68d1563f7ff3e.bin',
  './audio/fdc5a54e22ba3da3665639ada48be34f.bin',
  './audio/fe156f5d80bde844f638bb3ebad307c3.bin',
  './audio/fe2af5f909ad6757329efec6c0bdf256.bin',
  './audio/fe545b8e2ad2c296945b22e6cc5424b7.bin',
];
async function cacheComplet() {
  const app = await caches.open(CACHE_APP), audio = await caches.open(CACHE_AUDIO);
  const a = await Promise.all(FICHIERS_APP.map(async (f) => !!(await app.match(f))));
  const b = await Promise.all(FICHIERS_AUDIO.map(async (f) => !!(await audio.match(f))));
  return a.every(Boolean) && b.every(Boolean);
}
// Le clip est identifié par son NOM, pas par son contenu : un clip déjà
// téléchargé est recopié de l'ancien cache au lieu d'être retéléchargé, ce qui
// est tout l'intérêt des deux caches séparés. Conséquence assumée (même choix
// que chez Casmo) : réenregistrer une voix SANS changer l'identifiant du clip
// laisserait l'ancienne version en place indéfiniment. Dans ce cas, changer
// l'identifiant du clip — ou vider les données du site sur l'appareil.
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
    // la racine et index.html sont servis quels que soient les paramètres (?qa=…)
    const hit = await cache.match(e.request, { ignoreSearch: url.pathname.endsWith('/') || url.pathname.endsWith('index.html') });
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
