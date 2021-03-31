var cache_name = 'mspwa-cache';
var cached_urls = [
    //"/static/js/bundle.js",
   // "/static/js/main.chunk.js",
   // "/static/js/0.chunk.js",
    "/index.html",
    "/",
    "/logo144.png"
];

self.addEventListener('install', function(event) {
  /*event.waitUntil(
    caches.open(cache_name)
    .then(function(cache) {
      return cache.addAll(cached_urls);
    })
  );*/
  event.waitUntil(
    caches.open(cache_name)
    .then( staticCache =>{
        // fichiers souhaités en cache
        // fichiers à mettre impérativement en cache
        return staticCache.addAll([
          "./",
          "./static/js/2.aea29ef2.chunk.js",
          "./static/css/2.7cd7d0fb.chunk.css",
         "./static/js/main.d6493719.chunk.js",
         "./static/js/runtime-main.76db1cc4.js",
         "./static/css/main.a5ea13d8.chunk.css",
          "./index.html",
          "./logo144.png"
        ])
    })
)
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName.startsWith('pages-cache-') && staticCacheName !== cacheName) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {

  if(event.request.url==='http://localhost:3000/static/js/main.chunk.js'){
    try{
    event.waitUntil(
        this.registration.showNotification("Hello",{
          body:"Hello From test push ntoifcation",
        })
    )
    }catch(e){
      console.log(e);
    }
  }
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          console.log('Found ', event.request.url, ' in cache');
          return response;
        }
        console.log('Network request for ', event.request.url);
        return fetch(event.request).then(function(response) {
          if (response.status === 404) {
            return caches.match('fourohfour.html');
          }
          return caches.open(cached_urls).then(function(cache) {
           cache.put(event.request.url, response.clone());
            return response;
          });
        });
      }).catch(function(error) {
        console.log('Error, ', error);
        return caches.match('offline.html');
      })
    );


    
  });


  self.addEventListener('push', function(event) {
    console.log('Push message', event);
    var title = 'Push message';
    event.waitUntil(
        self.registration.showNotification(title, {
            body: 'The Message',
            //icon: 'images/icon.png',
           // tag: 'my-tag'
    }));
});

  
 
