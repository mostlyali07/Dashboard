// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtHuC53tW2I3otGVyfswur4s_eE-5n6NU",
  authDomain: "dashboard-7610c.firebaseapp.com",
  projectId: "dashboard-7610c",
  storageBucket: "dashboard-7610c.appspot.com",
  messagingSenderId: "701019123707",
  appId: "1:701019123707:web:4deb0574eb39b579c7655e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const providers = new GoogleAuthProvider();

export { auth, providers };
