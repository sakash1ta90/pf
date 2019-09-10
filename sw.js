importScripts('/pf/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/pf/_nuxt/4cc72675d5ac82e62d04.js",
    "revision": "169388646551e8ff6757dda47b9c853b"
  },
  {
    "url": "/pf/_nuxt/4dcdddc5d249b97bb397.js",
    "revision": "39441dda55bbc0018d1c4d4a20beb5c1"
  },
  {
    "url": "/pf/_nuxt/a4eed31adb47819a9e62.js",
    "revision": "6cf877bbc60717fd411ba1289e235521"
  },
  {
    "url": "/pf/_nuxt/bdcffe7ca440d942f5db.js",
    "revision": "bedda79f8b52cac0e635b4909a71b394"
  },
  {
    "url": "/pf/_nuxt/c07bad38565711258aff.js",
    "revision": "73b079a3923701c6e8be830e5761e227"
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
