importScripts('/pf/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/pf/_nuxt/431c017a654a5113508f.js",
    "revision": "a36b0bd96f1c91a72d59f98ed603a430"
  },
  {
    "url": "/pf/_nuxt/7ebaa8ffbbd97f921c5f.js",
    "revision": "75ee6b4d4e52d18fb4ad4504bd3f45bc"
  },
  {
    "url": "/pf/_nuxt/f0b24095be16d39e06fc.js",
    "revision": "962b96cc4775eced425aca22083b2247"
  },
  {
    "url": "/pf/_nuxt/f34c40bdd2a84bb6ccc0.js",
    "revision": "84b3213d3f18a8bd4683ba558f48caab"
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
