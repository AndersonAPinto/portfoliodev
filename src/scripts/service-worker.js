const cacheName = 'site-cache-v1';
const assets = [
  '/', // Página inicial
  './index.html', // Arquivo HTML
  './styles/styles.css', // CSS
  './scripts/app.js', // JS
  './images/sobre/channels4_profile.jpg', // Imagem (ajuste conforme necessário)
  // Adicione outros arquivos que você quer armazenar no cache
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets).catch((err) => {
        console.error('Erro ao adicionar ao cache:', err);
      });
    })
  );
});


// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [cacheName];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (!cacheWhitelist.includes(cache)) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Interceptando as requisições e respondendo com os dados do cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
