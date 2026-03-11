const CACHE_NAME = 'python-exercises-learn-offline-v24';

// Injected at build by scripts/inject-precache.js (from dist/index.html)
const PRECACHE_ASSETS = []; // BUILD_INJECT

const CDN_URLS = [
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap',
  'https://cdn-icons-png.flaticon.com/512/5968/5968350.png'
];

function getBasePath() {
  try {
    let pathname = new URL(self.registration.scope).pathname;
    if (!pathname.endsWith('/')) pathname += '/';
    return pathname;
  } catch (_) {
    return '/python-exercisesV1/';
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const base = getBasePath();

      // Precache all app shell + hashed assets (injected at build)
      for (const url of PRECACHE_ASSETS) {
        try {
          await cache.add(url);
        } catch (e) {
          console.warn('Precache failed:', url, e.message);
        }
      }

      for (const url of CDN_URLS) {
        try {
          await cache.add(url);
        } catch (e) {
          console.warn('CDN cache failed:', url, e.message);
        }
      }

      self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) return caches.delete(cacheName);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);
  const isNavigation = event.request.mode === 'navigate' || event.request.destination === 'document' || event.request.url.includes('index.html');
  const isLocal = requestUrl.origin === location.origin;
  const base = getBasePath();

  // Navigation: network first, then cache (so offline reopen works)
  if (isNavigation) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, response.clone());
              cache.put(base + 'index.html', response.clone());
              cache.put(base, response.clone());
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request)
            .then((cached) => cached || caches.match(base + 'index.html'))
            .then((cached) => cached || caches.match(base))
            .then((cached) => cached || new Response('Offline', { status: 503, statusText: 'Offline' }));
        })
    );
    return;
  }

  // Local JS/CSS: cache first, then network (offline = serve from cache)
  if (isLocal) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request)
          .then((response) => {
            if (response && response.status === 200 && response.type !== 'opaque') {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
            }
            return response;
          })
          .catch(() => new Response('', { status: 503, statusText: 'Service Unavailable' }));
      })
    );
    return;
  }

  // CDN: cache first, then network
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (response && response.status === 200 && response.type !== 'opaque') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => new Response('', { status: 503, statusText: 'Service Unavailable' }));
    })
  );
});
