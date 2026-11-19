const CACHE = 'quizmas-2026-v2';
const CORE = [
  './', './index.html', './manifest.webmanifest',
  './assets/baban/mand.jpg',
  './assets/baban/jess-hoar.jpg',
  './assets/baban/fraser-mcdougall.jpg',
  './assets/baban/evie-sutcliffe.jpg',
  './assets/baban/tom-taylor.jpg',
  './assets/baban/rebekah-goodchild.jpg',
  './assets/baban/george-holding.jpg',
  './assets/baban/hannah-alcock.jpg',
  './assets/baban/leon-galli.jpg',
  './assets/baban/quiz-host.jpg',
  './assets/iceland/hallgrimskirkja.jpeg',
  './assets/iceland/blue-lagoon.jpeg',
  './assets/iceland/gullfoss.jpeg',
  './assets/iceland/bloody-gate.jpeg',
  './assets/iceland/northern-lights.jpeg'
];
self.addEventListener('install', (event) => event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(CORE)).then(() => self.skipWaiting())));
self.addEventListener('activate', (event) => event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
    if (response.ok) { const copy = response.clone(); caches.open(CACHE).then((cache) => cache.put(event.request, copy)); }
    return response;
  }).catch(() => caches.match('./index.html'))));
});
