// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfsOGuF47yICiU9vimDi0yeRp6Sz5ajJQ",
  authDomain: "juanchat-v1.firebaseapp.com",
  projectId: "juanchat-v1",
  storageBucket: "juanchat-v1.appspot.com",
  messagingSenderId: "236394993466",
  appId: "1:236394993466:web:43a45867e5323c18da6203",
  measurementId: "G-XV26TFM1DB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
