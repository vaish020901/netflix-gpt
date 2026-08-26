// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUXx2oDYh0fRy7McE6W0ZBPYV8iDA8JY8",
  authDomain: "netflixgpt-f790d.firebaseapp.com",
  projectId: "netflixgpt-f790d",
  storageBucket: "netflixgpt-f790d.firebasestorage.app",
  messagingSenderId: "302331545386",
  appId: "1:302331545386:web:2baef0c92787ec69fe4053",
  measurementId: "G-5RTVGBKRQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
