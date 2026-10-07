// Service worker généré par scelle.sh (casmo chiffré) — ne pas éditer à la main.
const CACHE_APP = 'casmo-app-ab42545ff1f0';
const CACHE_AUDIO = 'casmo-audio-bb913ae86408';
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
  './audio/043f8bf7f4b350658ac755ed06937c8d.bin',
  './audio/0a1fdf6fbd6f366ebb45301c4158d58c.bin',
  './audio/0ac157e80dfeb92395452682c320c166.bin',
  './audio/0cde7a274674475760ac75c396d2cb91.bin',
  './audio/0ee8b783b1a16e6bcca4158eeb90f2e4.bin',
  './audio/0f87710914b8d8cbdee4fb2b36d83f57.bin',
  './audio/11930ac5721a0833744bb087b05ecaa9.bin',
  './audio/1570f28e1e34792f1e91768e96e75d5a.bin',
  './audio/15ec1542b989308f2b13739e5b216015.bin',
  './audio/167a56e5213b3c21cffae8bf8bd6d902.bin',
  './audio/1770d356a8eb59b81694b55d4cb1a078.bin',
  './audio/1df34906f807e6f096c9ca6fe6fa4f8e.bin',
  './audio/2018f5de5afa21204cf900d4d51bf7e3.bin',
  './audio/216113d279100e723b9a73c6341a8045.bin',
  './audio/21a2257703cc212f1cd8472ae379e83f.bin',
  './audio/21e5e5b59097560577b40ad130196268.bin',
  './audio/25e10ce20e424a3a34181f0964416638.bin',
  './audio/2949a99160cbf3010fdd406e3912d6c8.bin',
  './audio/29e52d68f00ba9cbf0a9f5711c66f8a2.bin',
  './audio/2b0822198ae30eb035d378eceb2a4293.bin',
  './audio/2b72c78686cf32dda9f3ca4c922d9d54.bin',
  './audio/2d094853df0f42e2c06f9f40c9e9d697.bin',
  './audio/332533b756ebfce9abadd3b178e2b3d4.bin',
  './audio/347d8aa199315b00e778666ae6e0d34e.bin',
  './audio/35e6de069796b41fa93b753777d6ef15.bin',
  './audio/362d0bb49fcb45c85bbe403eda1ba196.bin',
  './audio/367be62f0ee0572a02ee7d30fbd5ed93.bin',
  './audio/3a1c57973ec6c8b06eb419c816605f32.bin',
  './audio/3d763808a91fbe93185b2c58a73f6edf.bin',
  './audio/458e2d3507c2d0c6c03c5cb89d60d4eb.bin',
  './audio/470020bcbbae0ca55163903df3dc6f88.bin',
  './audio/470e341bf464034337bfd9329dc193b5.bin',
  './audio/4a6bc586532d2d2dc002460258f9c563.bin',
  './audio/4ca6538156d932bec82cff5f968f2ca8.bin',
  './audio/4dbe31611d1811b35bb83bb8a4fc8df9.bin',
  './audio/4f9aecd7a158a365f320b0c25c4c785e.bin',
  './audio/5084d9c2312050a0233bcc8b199655bf.bin',
  './audio/51deaf3b256ed26b7e3181425a7021f7.bin',
  './audio/56f26a06e7ad793d108f29c671ec17dd.bin',
  './audio/582c12fbf8c416a66653929ceaacde46.bin',
  './audio/58e66a5b383dc4c1e708857a89386ae1.bin',
  './audio/59708acd99e187a9bb2139304f144df6.bin',
  './audio/5a7ca7d22e6cfadab2f50393a41a5c06.bin',
  './audio/5a807629f96b0477906af91fcd6b3c5d.bin',
  './audio/5a99acde6f65e051395fa6f978ffe86b.bin',
  './audio/5bdb61aa6e77b44ccd4cf9792f4dded6.bin',
  './audio/5d37a15b6551b2527b7c87f16e07129e.bin',
  './audio/5e1cf2ed252611ef05cfcaf026d4b79a.bin',
  './audio/655d7521823b14fed60dd80ec45ed0d6.bin',
  './audio/662f456cfa0a03242a18f6b0975a599f.bin',
  './audio/665d8eea64262c753c37c14fd8a8210b.bin',
  './audio/67c6c33fcde2c75d375804730f4b9110.bin',
  './audio/6b86a657baf799bf383311ae7fe66d04.bin',
  './audio/6d704cb2e65efb12e46b9866e36a7544.bin',
  './audio/6edc405209ffb83d3db11f1f36335e4e.bin',
  './audio/6f49f950682af8c7266101b1a843406b.bin',
  './audio/707546e082b0a6fff27deed5c2481df1.bin',
  './audio/72b0835b24a70a4c76d9e20b04ebf896.bin',
  './audio/75904240cb16943a18ca88e9dab96e49.bin',
  './audio/76df02939abc26c584744ae042cbf7d9.bin',
  './audio/7753639ab64741ab3d96572e18440cc7.bin',
  './audio/7b65bc17c34ecbf790311488a435119b.bin',
  './audio/7ee3bc564664fc4e36f0796ac830de26.bin',
  './audio/836d6aba3c17ecd2f88429da5ef3951a.bin',
  './audio/8633b1d49cc36139bfb86f5fd4a08354.bin',
  './audio/870aa63f323de2f5155af2520614665b.bin',
  './audio/87ba91e0b9f3000d63c34ec01a8c5d24.bin',
  './audio/88484236cb355a893036473fa9228a7f.bin',
  './audio/887f1c30e7e76c25b85ae1a084f36779.bin',
  './audio/894b341c096bcdec1b10fc47c6858d46.bin',
  './audio/8af5b87fd4bbf19f806470203c5884f8.bin',
  './audio/8e41f48a37c420f8a721d8ccae7029cc.bin',
  './audio/8ee2e7797aa907fadb14922d614ee857.bin',
  './audio/8f097c9932108c6fc3cd0c8855fc70cc.bin',
  './audio/90683251fcaab5b857306a8bda9aee83.bin',
  './audio/91abb201b3641a34b5b4f492e7402bce.bin',
  './audio/9210970c770c20c00ed709e6e7a6f85c.bin',
  './audio/921d81d620b19fbf7722ae7e49235c82.bin',
  './audio/9948d6fd4654c903c4910933a0bc9164.bin',
  './audio/9ad229b41d130cdb0dd020722deb922d.bin',
  './audio/9eaf23a2a3eb21dc22d387c1f205e6f2.bin',
  './audio/a21a30e0556a5cc073a8e695298a47f0.bin',
  './audio/a524eed915e92359c331243cb0d69b83.bin',
  './audio/a62a8fc41d77020d5759775bf993b149.bin',
  './audio/a637b21ea885c64938be1dbe4cf17c3c.bin',
  './audio/a82bd0caee24ee9309d22dde1f8a2880.bin',
  './audio/ade454fef75daa6c743f37bc2fefe2b6.bin',
  './audio/afe84332b25d880e6ece164a258fa57c.bin',
  './audio/b2930ed7a698a9c0b95bf867a0a4f2d7.bin',
  './audio/b3e6a254745ac880d7804228529b16f5.bin',
  './audio/b4c2a2f136f9cb85dc320e5454c7e130.bin',
  './audio/b6bef45a09989e31a63a65172ec62fe5.bin',
  './audio/b999e3d9841edf8d6f4532f957abd845.bin',
  './audio/ba1e0e9d07f1640979efe782aed9fc4d.bin',
  './audio/bbace8f30c5f41e7fb30255327232c72.bin',
  './audio/bcdf43e1ba7620511d5e53feb1e7bce4.bin',
  './audio/bd397f19073416771e6e324ca4711322.bin',
  './audio/beb890015629ede263b69fa3cccb0949.bin',
  './audio/bf0068951cdd604ab52654d390395d7a.bin',
  './audio/c058b2b1f9ac655b1c308c7b15e09d62.bin',
  './audio/c5357c183d372a260929599b74238ce1.bin',
  './audio/c562dd719cb50a54854d10fff69e3e19.bin',
  './audio/c65206dc1042f9b5f4aa7efa79094001.bin',
  './audio/c67f77ade31c6859ca9f7f27cc87836a.bin',
  './audio/c74a1e6298c0259d2b16a98e1df9ee7a.bin',
  './audio/c9674d9a4b2d873396238c25a1dc7e23.bin',
  './audio/cc4f5a958501d86073bba8928e61f6da.bin',
  './audio/d10de3c4aac267dcc8bc4de6cc6fb8c9.bin',
  './audio/d131fe49bab408da25520b5837268bc8.bin',
  './audio/d1611f097e93c4dcf36ca6ec8e0fd8b9.bin',
  './audio/d1edc34dc8acf4f9dec8d4d4df5bf054.bin',
  './audio/d280044c6eec395fe824654639047b78.bin',
  './audio/d6f4d46b7dd2d605c74ea39fb556323e.bin',
  './audio/dce3cf756c255f300376dfb399828b45.bin',
  './audio/e188a94650f866d4bf0179ca9ac177b5.bin',
  './audio/e1a3b957d1a364a2d61331e88d286ad2.bin',
  './audio/e3841e872eb8437472634a63136b937d.bin',
  './audio/e7fe7c3e84cce4d2293844689b27bff0.bin',
  './audio/e88bea44f9bd2a2396b9c2053a3415d1.bin',
  './audio/ea666a2b09fbb0eb14886085ea68efc6.bin',
  './audio/eb3b6bcbeb5f9802e0b0cf7a99a4287f.bin',
  './audio/ebb54227e657a47261cfe5467d301b73.bin',
  './audio/ecf9779d8bae4f02817b09e6ab5607e7.bin',
  './audio/ee46c9b9d1b9a37a1236276ea057f283.bin',
  './audio/ee65d5372bb0c41131099aef6c925f7b.bin',
  './audio/f24224eda0ac8c867770d2e9f7ee7bfd.bin',
  './audio/f330d38ac9059f016d81c938d621d849.bin',
  './audio/f616bc26cafe4cfdbe7251845cef460c.bin',
  './audio/f6df3742a59d77dbad6e08dd69ef1b7b.bin',
  './audio/f7704ca639dc1983474a8f827ca85de4.bin',
  './audio/f83533785e9987472c7144707a0c4232.bin',
  './audio/f8e2fdc6ddd47810dcfb007909eb97de.bin',
  './audio/fa82d8aa1962df96ea39060209525606.bin',
  './audio/fbea069aa529f1e6b783f9de32150e12.bin',
  './audio/fef3dc95cd14b5faaad0ecf82d0aa163.bin',
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
      // un clip déjà téléchargé est RECOPIÉ depuis l'ancien cache audio
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
