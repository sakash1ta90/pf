importScripts('/pf/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/pf/_nuxt/16fbc48b8aa27a846457.js",
    "revision": "4f59f682172058e6aa7cfda13d9af505"
  },
  {
    "url": "/pf/_nuxt/ab0ff4644670e09c3745.js",
    "revision": "aa7bfde675536d3defb081d6b4c3387c"
  },
  {
    "url": "/pf/_nuxt/b5a997e8bba12d23a822.js",
    "revision": "8089b576255d84244c262ed40e364c78"
  },
  {
    "url": "/pf/_nuxt/c2d03bd7ed51fdf5ce84.js",
    "revision": "d826394ea5d73e3252d86c0d7a483260"
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
