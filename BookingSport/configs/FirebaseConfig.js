// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRyIZ3c0j-B6LZInW-eZxrFpLAey4PJmw",
  authDomain: "booking-sport-819f6.firebaseapp.com",
  projectId: "booking-sport-819f6",
  storageBucket: "booking-sport-819f6.appspot.com",
  messagingSenderId: "147205189404",
  appId: "1:147205189404:web:54c538b387c3375abbd4d9",
  measurementId: "G-SCXK34DMW1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);