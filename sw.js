const CACHE_NAME = 'SW2';
const FILES_TO_CACHE = [
    'index.html',
    'cursor.svg'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(FILES_TO_CACHE);
            })
            .catch(function(err) {
                console.error('SW Failed to install', err);
            })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName !== CACHE_NAME;
                }).map(function(cacheName) {
                    console.log('Deleting ' + cacheName);
                    return caches.delete(cacheName);
                })
            );
        })
    );
});
