// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log(process.env.VITE_PUBLIC)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "xiepsilonmanager.firebaseapp.com",
  projectId: "xiepsilonmanager",
  storageBucket: "xiepsilonmanager.appspot.com",
  messagingSenderId: "738436091091",
  appId: process.env.FIREBASE_APP_ID
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }