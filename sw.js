const CACHE_NAME = 'fun-corner-v1';
const urlsToCache = [
  '/',
  'index.html',
  'login.html',
  'register.html',
  'manifest.json',
  'logo.jpeg',
  'owner.jpg',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
