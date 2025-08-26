import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTJ2cQTcOMWDRKK0lFA1bj0GeYKmmWh6g",
  authDomain: "seemalinks-d0d78.firebaseapp.com",
  projectId: "seemalinks-d0d78",
  storageBucket: "seemalinks-d0d78.firebasestorage.app",
  messagingSenderId: "982115594071",
  appId: "1:982115594071:web:7c0dfe164456c80b5d9812",
  measurementId: "G-YHWGWHYYLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};