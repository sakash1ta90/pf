importScripts('/pf/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/pf/_nuxt/a46a909c3cc2c9fa27e0.js",
    "revision": "5717153e348cd69cda17fa73ab5cb4d2"
  },
  {
    "url": "/pf/_nuxt/aefc63b26748ef53a0e1.js",
    "revision": "1f875b05a8e90964a1046f6b41ebbf50"
  },
  {
    "url": "/pf/_nuxt/b5a997e8bba12d23a822.js",
    "revision": "8089b576255d84244c262ed40e364c78"
  },
  {
    "url": "/pf/_nuxt/df96a35b44ae73c4dd5d.js",
    "revision": "53de4a27c39171be274c4b74a4e8f102"
  },
  {
    "url": "/pf/_nuxt/f0b24095be16d39e06fc.js",
    "revision": "962b96cc4775eced425aca22083b2247"
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
