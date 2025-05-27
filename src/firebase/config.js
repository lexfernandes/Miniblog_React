import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXgPsB5hNyGDnoxultxpUuszFdrwRnXKk",
  authDomain: "miniblog-dc881.firebaseapp.com",
  projectId: "miniblog-dc881",
  storageBucket: "miniblog-dc881.firebasestorage.app",
  messagingSenderId: "382116969259",
  appId: "1:382116969259:web:d16b437a328ce533bca36e",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
