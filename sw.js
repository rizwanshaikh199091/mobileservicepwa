//let cacheData = "appV1";
var CACHE_NAME = 'appV1';
var urlsToCache = [
    "./static/js/bundle.js",
    "./static/js/main.chunk.js",
    "./static/js/0.chunk.js",
    "./index.html",
    "./"
];
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        // Open a cache and cache our files
        return cache.addAll(urlsToCache);
      })
  );
});

this.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
