// (A) INSTANT WORKER ACTIVATION
self.addEventListener("install", evt => self.skipWaiting());
 
// (B) LISTEN TO PUSH
self.addEventListener("push", evt => {
  const data = evt.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon,
    image: data.image
  });
});

self.addEventListener('notificationclick', function(event) {
  console.log('Notification click Received.');
  event.notification.close();
});