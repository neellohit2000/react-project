// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-280ad.firebaseapp.com",
  projectId: "mern-estate-280ad",
  storageBucket: "mern-estate-280ad.appspot.com",
  messagingSenderId: "271949435724",
  appId: "1:271949435724:web:6e04e0c10446b172acf5e9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);