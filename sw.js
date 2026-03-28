const CACHE_NAME = 'python-exercises-learn-offline-BUILD_ID'; // Replaced by inject-precache.js

// Injected at build by scripts/inject-precache.js (from dist/index.html)
const PRECACHE_ASSETS = []; // BUILD_INJECT

const CDN_URLS = [
  'https://cdn.tailwindcss.com',
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

function getBaseNoSlash() {
  const base = getBasePath();
  return base.endsWith('/') ? base.slice(0, -1) : base;
}

/** Match precached HTML for any navigation URL (query strings, trailing slash, iOS PWA). */
const CACHE_MATCH_OPTS = { ignoreSearch: true };

async function cachesMatchSafe(request) {
  try {
    return await caches.match(request, CACHE_MATCH_OPTS);
  } catch (_) {
    return await caches.match(request);
  }
}

async function matchCachedNavigation(request, base, baseNoSlash) {
  const origin = self.location.origin;
  const candidates = [
    request,
    base + 'index.html',
    origin + base + 'index.html',
    base,
    baseNoSlash,
    origin + base,
    origin + baseNoSlash
  ];
  for (const key of candidates) {
    const req = typeof key === 'string' ? new Request(key, { method: 'GET' }) : key;
    const hit = await cachesMatchSafe(req);
    if (hit) return hit;
  }
  return null;
}

/** Prefer fresh HTML when online; fall back if cache option is unsupported. */
function fetchNavigationHtml(request) {
  return fetch(request, { cache: 'no-store' }).catch(() => fetch(request));
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const base = getBasePath();
      const baseNoSlash = getBaseNoSlash();

      // Precache all app shell + hashed assets (injected at build)
      for (const url of PRECACHE_ASSETS) {
        try {
          await cache.add(url);
        } catch (e) {
          console.warn('Precache failed:', url, e.message);
        }
      }

      // Ensure both /repo and /repo/ work offline (iOS PWA can reopen without trailing slash)
      try { await cache.add(baseNoSlash); } catch (_) {}

      for (const url of CDN_URLS) {
        try {
          // Use no-cors so opaque responses (e.g. Tailwind CDN) can be cached for offline
          const res = await fetch(url, { mode: 'no-cors' });
          await cache.put(url, res);
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

  const base = getBasePath();
  const baseNoSlash = getBaseNoSlash();
  const requestUrl = new URL(event.request.url);
  const isLocal = requestUrl.origin === location.origin;
  const path = requestUrl.pathname;
  // Safari / iOS PWA sometimes omits mode=navigate; still treat app shell HTML as navigation
  const isAppShellDocument =
    isLocal &&
    event.request.method === 'GET' &&
    (event.request.headers.get('accept') || '').includes('text/html') &&
    (path === baseNoSlash ||
      path + '/' === base ||
      path === base ||
      path.endsWith('/index.html'));
  const isNavigation =
    event.request.mode === 'navigate' ||
    event.request.destination === 'document' ||
    event.request.url.includes('index.html') ||
    isAppShellDocument;

  // Navigation: network first with no HTTP cache (so phone PWA gets fresh HTML and shows new build id), then cache for offline
  if (isNavigation) {
    event.respondWith(
      (async () => {
        try {
          const response = await fetchNavigationHtml(event.request);
          if (response && response.status === 200) {
            const cache = await caches.open(CACHE_NAME);
            const clone = response.clone();
            await cache.put(event.request, clone);
            await cache.put(base + 'index.html', response.clone());
            await cache.put(base, response.clone());
            await cache.put(baseNoSlash, response.clone());
          }
          return response;
        } catch (_) {
          const cached = await matchCachedNavigation(event.request, base, baseNoSlash);
          if (cached) return cached;
          return new Response('Offline', { status: 503, statusText: 'Offline' });
        }
      })()
    );
    return;
  }

  // Local JS/CSS: cache first, then network (offline = serve from cache)
  if (isLocal) {
    event.respondWith(
      cachesMatchSafe(event.request).then((cached) => {
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

  // CDN: cache first (allow opaque), then network using original request
  // NOTE: do NOT override mode here — forcing no-cors on an existing Request throws TypeError
  event.respondWith(
    cachesMatchSafe(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (response && (response.status === 200 || response.type === 'opaque')) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => new Response('', { status: 503, statusText: 'Service Unavailable' }));
    })
  );
});
