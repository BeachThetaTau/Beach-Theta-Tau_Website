// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "xiepsilonmanager.firebaseapp.com",
  projectId: "xiepsilonmanager",
  storageBucket: "xiepsilonmanager.appspot.com",
  messagingSenderId: "738436091091",
  appId: "1:738436091091:web:9af249bbbb14ba354bd826"
};

console.log(firebaseConfig.apiKey[0]);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }