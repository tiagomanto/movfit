import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

// // TODO: Use a configuration object
// const firebaseConfig = {
//   apiKey: "AIzaSyC2jW1U_4heNJHb9PD5k4PLEULnWIQ4FeM",
//   authDomain: "movfit-b3668.firebaseapp.com",
//   databaseURL: "https://movfit-b3668-default-rtdb.firebaseio.com",
//   projectId: "movfit-b3668",
//   storageBucket: "movfit-b3668.appspot.com",
//   messagingSenderId: "844781366317",
//   appId: "1:844781366317:web:bac77544170ca7dfbedca4"
// };

// TODO: Use a configuration object
const firebaseConfig = {
  apiKey: "AIzaSyC2jW1U_4heNJHb9PD5k4PLEULnWIQ4FeM",
  authDomain: "http://localhost:4000/auth",
  databaseURL: "http://localhost:4000/database",
  projectId: "movfit-b3668",
  storageBucket: "http://localhost:4000/firestore",
  messagingSenderId: "844781366317",
  appId: "1:844781366317:web:bac77544170ca7dfbedca4"
};


let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}



const db = app.firestore();
const auth = firebase.auth();

if (location.hostname === 'localhost') {
  db.useEmulator('localhost', 8080);
  auth.useEmulator('http://localhost:9099/', { disableWarnings: true });
}


export { db, auth };

