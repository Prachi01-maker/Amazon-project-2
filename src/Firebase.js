// Import the Firebase SDK
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AlzaSyCXyQfV0NulrWzYK2nwrSaHKKp2oOGR4o",
  authDomain: "clone-website-6b8db.firebaseapp.com",
  projectId: "clone-website-6b8db",
  storageBucket: "clone-website-6b8db.appspot.com",
  messagingSenderId: "1063159466572",
  appId: "1:1063159466572:web:e878f5ea7e81c1da3602e9",
  measurementId: "G-59L72NMEH6"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firestore (the database)
const db = firebaseApp.firestore();

// Initialize Firebase Authentication
const auth = firebase.auth();

// Export database and authentication to use in other parts of your app
export { db, auth };
  