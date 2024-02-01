// import firebase from "firebase/compat/app";
// import 'firebase/compat/messaging'
// const config = {
//     apiKey: "AIzaSyDXBANxadtWpiSHO2RD0jDK6hdTvN4t2yc",
//     authDomain: "p-services-363205.firebaseapp.com",
//     databaseURL: "https://p-services-363205-default-rtdb.firebaseio.com",
//     projectId: "p-services-363205",
//     storageBucket: "p-services-363205.appspot.com",
//     messagingSenderId: "612261298426",
//     appId: "1:612261298426:web:10f19e85877d6082488943",
//     measurementId: "G-HE4JB6PDX1"
// };

// firebase.initializeApp(config);

// const messaging = firebase.messaging();


// export const requestFirebaseNotificationPermission = () =>
//   new Promise((resolve, reject) => {
//     messaging
//       .requestPermission()
//       .then(() => messaging.getToken())
//       .then((firebaseToken) => {
       
//         resolve(firebaseToken);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });

// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     messaging.onMessage((payload) => {
//       resolve(payload);
//     });
//   });