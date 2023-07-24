import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyDJyYmVzgx53IXQ4hNiyfGBKBdbHqwG3jc',
  // authDomain: 'localhost',
  // projectId: 'dev-login-7327c',
  // storageBucket: 'YOUR_STORAGE_BUCKET',
  // messagingSenderId: '365151677891',
  // appId: 'dev-login-7327c',
};

// Check if Firebase is not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
