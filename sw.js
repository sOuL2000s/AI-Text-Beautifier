// This is a dummy service worker to enable the install icon
// It does not implement any caching or offline capabilities.
// Its sole purpose is to fulfill the PWA criteria that requires a service worker
// with a 'fetch' event listener to trigger the browser's "Install" prompt.
self.addEventListener('install', (event) => {
  console.log('Dummy service worker installed');
  self.skipWaiting(); // Forces the waiting service worker to become the active service worker
});

self.addEventListener('activate', (event) => {
  console.log('Dummy service worker activated');
  event.waitUntil(clients.claim()); // Takes control of pages even if they haven't reloaded
});

self.addEventListener('fetch', (event) => {
  // This minimal fetch handler simply allows all network requests to go through.
  // It does not cache anything or provide offline functionality.
  // It just satisfies the browser's requirement for a fetch handler to consider the PWA installable.
  // console.log('Dummy service worker fetching:', event.request.url);
});