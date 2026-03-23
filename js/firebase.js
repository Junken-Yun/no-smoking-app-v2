// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBpXjg8usbzBqu9im73XMH8ACKcZNK_870",
  authDomain: "no-smoking-app-v2.firebaseapp.com",
  projectId: "no-smoking-app-v2",
  storageBucket: "no-smoking-app-v2.firebasestorage.app",
  messagingSenderId: "850761263429",
  appId: "1:850761263429:web:0b1a3913a9f6f97c93362c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
