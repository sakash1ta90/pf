importScripts('/pf/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/pf/_nuxt/857b9da5384fb9572fd4.js",
    "revision": "a224e41dd28aa70f99e2dfaa380090ec"
  },
  {
    "url": "/pf/_nuxt/e266e1d173c363cbdc3b.js",
    "revision": "8a7187ee206e3e415969a1c3654d3939"
  },
  {
    "url": "/pf/_nuxt/ef90679b63fd4e41c99f.js",
    "revision": "a45a1a555f024ca8c726e78d2324a7be"
  },
  {
    "url": "/pf/_nuxt/f47b535778bff7a94411.js",
    "revision": "aed8972990af08f10296fae4a419d1af"
  },
  {
    "url": "/pf/_nuxt/f6cefa792a0f30f1c81c.js",
    "revision": "00645426dc5c1f290d7db0962299cb38"
  }
], {
  "cacheId": "pf",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/pf/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/pf/.*'), workbox.strategies.networkFirst({}), 'GET')
