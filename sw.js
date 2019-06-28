importScripts('/<repository-name>/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/<repository-name>/_nuxt/0a1e05b95d600de935d7.js",
    "revision": "5a9bfe3e85542626d8f137fc6593c85c"
  },
  {
    "url": "/<repository-name>/_nuxt/7ebaa8ffbbd97f921c5f.js",
    "revision": "75ee6b4d4e52d18fb4ad4504bd3f45bc"
  },
  {
    "url": "/<repository-name>/_nuxt/9766ca1f424129ed6f44.js",
    "revision": "a7facf67d8cce68e6ab1e526977a3b88"
  },
  {
    "url": "/<repository-name>/_nuxt/f0b24095be16d39e06fc.js",
    "revision": "962b96cc4775eced425aca22083b2247"
  }
], {
  "cacheId": "pf",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/<repository-name>/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/<repository-name>/.*'), workbox.strategies.networkFirst({}), 'GET')
