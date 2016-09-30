const CACHE_NAME = 'SW1';
const filesToCache = [
    'index.html',
    'cursor.svg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(cache => cache.addAll(filesToCache));
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches
            .keys()
            .then(cacheNames => Promise.all(
                cacheNames
                    .filter(cacheName => cacheName !== CACHE_NAME)
                    .map(cacheName => cache.delete(cacheName));
            ));
    );
});
