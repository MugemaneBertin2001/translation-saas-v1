import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC_16wW7C6XulAIafHEfm5aA_vnnkvOrs",
  authDomain: "polyglot-chat-dd643.firebaseapp.com",
  projectId: "polyglot-chat-dd643",
  storageBucket: "polyglot-chat-dd643.appspot.com",
  messagingSenderId: "345642553106",
  appId: "1:345642553106:web:f95adeb4a28136a707edcb",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
