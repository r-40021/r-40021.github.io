var CACHE_NAME="20210515",urlsToCache=["./","./assets/css/style.css","./assets/js/hideMenu.js","./favicon/favicon-32x32.png","./uploads/MIppxngn_400x400.jpg","./favicon/site.webmanifest","./uploads/2021/05/08/bingo_ja.jpg","./uploads/timer.png","./uploads/fake.jpg","./uploads/key.PNG"];self.addEventListener("install",function(e){e.waitUntil(caches.open(CACHE_NAME).then(function(e){return console.log("Opened cache"),e.addAll(urlsToCache)}))}),self.addEventListener("activate",function(e){var n=[CACHE_NAME];e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(-1===n.indexOf(e)&&-1===e.indexOf("-"))return caches.delete(e)}))}))}),self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(n){if(n)return n;var t=e.request.clone();return fetch(t).then(function(n){if(!n||200!==n.status||"basic"!==n.type)return n;var t=n.clone();return caches.open(CACHE_NAME).then(function(n){n.put(e.request,t)}),n})}))});
