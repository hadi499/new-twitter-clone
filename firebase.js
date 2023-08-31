import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-clone-5a11a.firebaseapp.com",
  projectId: "twitter-clone-5a11a",
  storageBucket: "twitter-clone-5a11a.appspot.com",
  messagingSenderId: "305150026079",
  appId: "1:305150026079:web:8d9b554ba74821507d16ea",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
