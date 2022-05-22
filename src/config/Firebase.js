// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVQbUJvnZ0fQ_w-P_xe4y1uluTukEQ8oE",
  authDomain: "ecommerce-app-8ada8.firebaseapp.com",
  projectId: "ecommerce-app-8ada8",
  storageBucket: "ecommerce-app-8ada8.appspot.com",
  messagingSenderId: "698912354475",
  appId: "1:698912354475:web:40d7d11c8a231c154007ee",
  measurementId: "G-7E5YY47S8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const  db = getFirestore(app);
export const auth = getAuth(app)