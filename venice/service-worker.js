"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["./index.html","33e69ad8ab87b7e60731f0da4e416e15"],["./static/css/main.db12fb62.css","b5d5c62eb5ac750c2e1e74a130d9f666"],["./static/js/main.b3114596.js","692ba4a48e0fc9696d7aba6b723776ed"],["./static/media/337B00_0_0.50285519.eot","50285519a07a7235b9dfdcf0c5aef758"],["./static/media/337B00_0_0.826b049b.woff","826b049bdd71ec7308f51dc1f766ce2b"],["./static/media/337B00_0_0.89b2a9ad.ttf","89b2a9ad1984670133207040a1235681"],["./static/media/337B00_0_0.992e6721.woff2","992e6721c2baa63726c0b7f546322336"],["./static/media/337B00_1_0.0c5316e8.woff2","0c5316e8e24f4dd89de5e8a13dbe5073"],["./static/media/337B00_1_0.48b86668.eot","48b866682b7e7ecb08100c5de2c2c98a"],["./static/media/337B00_1_0.9eb6d1b7.woff","9eb6d1b73ea48aed6ec9b6f019a919a0"],["./static/media/337B00_1_0.b5143087.ttf","b5143087b3808465a1b2c3ac29c90344"],["./static/media/337B00_2_0.02db7759.woff2","02db7759b9b69b11c49b873f30e9053f"],["./static/media/337B00_2_0.12f56a82.ttf","12f56a82f5f867cb545a869e7b37eec1"],["./static/media/337B00_2_0.7941e6cf.eot","7941e6cfe64cc910c443e49a175c7eeb"],["./static/media/337B00_2_0.9070dbcc.woff","9070dbcc044e6b5f126a7e79a3401f15"],["./static/media/337B00_3_0.1384c356.woff2","1384c3568b9f1b817d03de5726a42c01"],["./static/media/337B00_3_0.52650d55.ttf","52650d554c0a531015029804a415c425"],["./static/media/337B00_3_0.9eae8ada.woff","9eae8ada1130b886685d8ef47db8ede0"],["./static/media/337B00_3_0.c3a624b6.eot","c3a624b6db6ee7d04a1922f18a4d4924"],["./static/media/337B00_4_0.a76294d6.woff2","a76294d6158a8f1a1b7eefa5d9e9c4de"],["./static/media/337B00_4_0.d4b163e0.ttf","d4b163e022c2bea2c698c3196219a383"],["./static/media/337B00_4_0.e15377d6.woff","e15377d69080183ec3e4136537408b40"],["./static/media/337B00_4_0.ef608093.eot","ef608093dbf77937bfea374fdd9034bf"],["./static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["./static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["./static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["./static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["./static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["./static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["./static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["./static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["./static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("./index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});