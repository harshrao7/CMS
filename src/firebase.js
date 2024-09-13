import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  apiKey:"AIzaSyBxt6z4QWvx668xUwUoZ_ZYtVUsOXYQF80",
  authDomain: "cocoding-1d948.firebaseapp.com",
  projectId: "cocoding-1d948",
  storageBucket: "cocoding-1d948.appspot.com",
  messagingSenderId: "294262072880",
  appId: "1:294262072880:web:dab72dfd22c7a7287aeff5",
  measurementId: "G-35RX409XYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);