import * as firebase from 'firebase'
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC5oSXuNMWFMyVsYEDPD8xOYscLBHaprjc",
    authDomain: "ecommerce-e506b.firebaseapp.com",
    projectId: "ecommerce-e506b",
    storageBucket: "ecommerce-e506b.appspot.com",
    messagingSenderId: "1069213947488",
    appId: "1:1069213947488:web:4a63565ecc197361e85505",
    measurementId: "G-N4CW78V8Z9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


//export
export const auth  =firebase.auth()

export const googleAuthProvider = new firebase.auth.googleAuthProvider

  