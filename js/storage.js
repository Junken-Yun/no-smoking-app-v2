// js/storage.js
import { db } from "./firebase.js";
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const USER_ID = "defaultUser";

export async function saveData(data) {
  await setDoc(doc(db, "users", USER_ID), data);
}

export async function loadData() {
  const docRef = doc(db, "users", USER_ID);
  const snap = await getDoc(docRef);
  return snap.exists() ? snap.data() : null;
}
