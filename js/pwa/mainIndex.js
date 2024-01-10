// sw.js

const cacheName = 'my-pwa-cache';
const filesToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    // Add other assets and pages that you want to cache
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
