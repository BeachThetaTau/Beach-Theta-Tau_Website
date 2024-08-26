// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log(process.env.VITE_PUBLIC)

// Your web app's Firebase configuration
const firebaseConfig = {
  
  apiKey: "AIzaSyAucirYbu-389E27WERw9Zk0d2BJ18A1pU",
  authDomain: "xiepsilonmanager.firebaseapp.com",
  projectId: "xiepsilonmanager",
  storageBucket: "xiepsilonmanager.appspot.com",
  messagingSenderId: "738436091091",
  appId: "1:738436091091:web:9af249bbbb14ba354bd826"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }