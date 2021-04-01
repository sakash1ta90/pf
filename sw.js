importScripts('/pf/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/pf/_nuxt/21a906b.js",
    "revision": "b47a4127a2028e906a74c0600a254a00"
  },
  {
    "url": "/pf/_nuxt/45c5341.js",
    "revision": "93288cd40351db67ba1c58809abb1286"
  },
  {
    "url": "/pf/_nuxt/60789cc.js",
    "revision": "a216e1a64ab81eb23903555171331834"
  },
  {
    "url": "/pf/_nuxt/b775833.js",
    "revision": "c859227870ca05790433525b97edb1d2"
  },
  {
    "url": "/pf/_nuxt/bcf6ed6.js",
    "revision": "2b93d08a8460abe32c3452083b1afbbe"
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
