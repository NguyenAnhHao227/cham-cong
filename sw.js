// Service worker tối giản: chỉ để Chrome cho phép cài ứng dụng. Không lưu cache nên luôn lấy bản mới nhất.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  if (e.request.mode === 'navigate') e.respondWith(fetch(e.request).catch(() => new Response('Không có mạng. Hãy kết nối mạng rồi mở lại.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } })));
});
