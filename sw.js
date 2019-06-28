importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/7ebaa8ffbbd97f921c5f.js",
    "revision": "75ee6b4d4e52d18fb4ad4504bd3f45bc"
  },
  {
    "url": "/_nuxt/bef1bd2e3aa7ab2e1b50.js",
    "revision": "0e4c6f0f5e301b399161e2deb8beb87c"
  },
  {
    "url": "/_nuxt/ea3dab86cfe08e9a412c.js",
    "revision": "d2b31a73b654371182bf07592e5f3d17"
  },
  {
    "url": "/_nuxt/f0b24095be16d39e06fc.js",
    "revision": "962b96cc4775eced425aca22083b2247"
  }
], {
  "cacheId": "pf",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
