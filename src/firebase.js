// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgme7i6VKDRYOZOXujY7MsgzO2dt6bbGE",
  authDomain: "netflix-28b82.firebaseapp.com",
  projectId: "netflix-28b82",
  storageBucket: "netflix-28b82.appspot.com",
  messagingSenderId: "232245805599",
  appId: "1:232245805599:web:1a7aee4a24bfb9ecfd0b2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
