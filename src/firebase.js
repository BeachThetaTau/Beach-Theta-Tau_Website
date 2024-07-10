// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

if (process.env.FIREBASE_API === undefined) {
  console.error("Firebase API key is not set. Please set the FIREBASE_API environment variable.");
  if (process.env.FIREBASE_API_ === undefined) {
    console.error("Backup is not set either...");
  }
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API ? process.env.FIREBASE_API : process.env.FIREBASE_API_,
  authDomain: "xiepsilonmanager.firebaseapp.com",
  projectId: "xiepsilonmanager",
  storageBucket: "xiepsilonmanager.appspot.com",
  messagingSenderId: "738436091091",
  appId: "1:738436091091:web:9af249bbbb14ba354bd826"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }