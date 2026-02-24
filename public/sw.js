const CACHE_NAME = 'gym-tracker-v1';

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Activated');
});

self.addEventListener('fetch', (e) => {
  // basic network-first caching or just bypass to make Next.js happy without fully offline capable routing yet
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
