// importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js');

// const config = {
//   apiKey: "AIzaSyDXBANxadtWpiSHO2RD0jDK6hdTvN4t2yc",
//   authDomain: "p-services-363205.firebaseapp.com",
//   databaseURL: "https://p-services-363205-default-rtdb.firebaseio.com",
//   projectId: "p-services-363205",
//   storageBucket: "p-services-363205.appspot.com",
//   messagingSenderId: "612261298426",
//   appId: "1:612261298426:web:10f19e85877d6082488943",
//   measurementId: "G-HE4JB6PDX1"

// };

// firebase.initializeApp(config);
// const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);

//   const notificationTitle = payload.data.title;
//   const notificationOptions = {
//     body: payload.data.body,
//     icon: '/firebase-logo.png'
//   };

//   return self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });

// self.addEventListener('notificationclick', event => {
//   console.log(event)
//   return event;
// });
