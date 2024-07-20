import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Import getAuth from firebase/auth

const firebaseConfig = {
  apiKey: "AIzaSyCpeXjQQa_DZxgTbR6J58zOiWpxlzzB3fY",
  authDomain: "expense-tracker-a8d24.firebaseapp.com",
  projectId: "expense-tracker-a8d24",
  storageBucket: "expense-tracker-a8d24.appspot.com",
  messagingSenderId: "713460913841",
  appId: "1:713460913841:web:040623468aec9285d3b490",
  measurementId: "G-F0G6FEFQLV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Initialize auth

export { db, auth }; // Export auth along with db
