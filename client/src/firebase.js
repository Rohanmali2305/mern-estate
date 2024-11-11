// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-47244.firebaseapp.com",
  projectId: "mern-estate-47244",
  storageBucket: "mern-estate-47244.firebasestorage.app",
  messagingSenderId: "688397101574",
  appId: "1:688397101574:web:d4b2176f1c4a8017a7b187"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);