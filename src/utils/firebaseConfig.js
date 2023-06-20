// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjLrAKI5Z6daE9YWG_vv2USXa2gNY22v8",
  authDomain: "ecomm-motos-punta.firebaseapp.com",
  projectId: "ecomm-motos-punta",
  storageBucket: "ecomm-motos-punta.appspot.com",
  messagingSenderId: "145661701250",
  appId: "1:145661701250:web:d55a763a8a99d19a77d89b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);