// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2PKWRGpjZOiQq83zgjcrHZgCJCiAXyc8",
  authDomain: "kay-commerce.firebaseapp.com",
  databaseURL: "https://kay-commerce-default-rtdb.firebaseio.com",
  projectId: "kay-commerce",
  storageBucket: "kay-commerce.appspot.com",
  messagingSenderId: "856616341479",
  appId: "1:856616341479:web:7f8a5fbee59b941678b742",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firebase Realtime Database
const db = getDatabase(app);

export { auth, db };
