import firebase from 'firebase/app';
import 'firebase/auth';




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
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  //firebase.analytics();


//export
export  const auth  =firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

  