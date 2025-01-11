// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "xiepsilonmanager.firebaseapp.com",
  projectId: "xiepsilonmanager",
  storageBucket: "xiepsilonmanager.appspot.com",
  messagingSenderId: "738436091091",
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 

export { auth, db };
