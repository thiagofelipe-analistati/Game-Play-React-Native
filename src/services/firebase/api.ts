import firebase from 'firebase/app'
import "firebase/auth"
// Optionally import the services that you want to usess
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDKn0XiunWHgjFlacmWAeJK1_cyI1clW0",
  authDomain: "autentication-app-38bdc.firebaseapp.com",
  projectId: "autentication-app-38bdc",
  storageBucket: "autentication-app-38bdc.appspot.com",
  messagingSenderId: "331496482068",
  appId: "1:331496482068:web:84efe7d2a1f917bc798e01"
};



// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

export default firebase;