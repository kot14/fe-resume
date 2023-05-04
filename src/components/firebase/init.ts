import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrOkd-klz07jE128oOE5EZcCMNuPAZWTc",
  authDomain: "resume-store-1f3dc.firebaseapp.com",
  projectId: "resume-store-1f3dc",
  storageBucket: "resume-store-1f3dc.appspot.com",
  messagingSenderId: "644319621482",
  appId: "1:644319621482:web:121c194e5502ce98e7b513",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
