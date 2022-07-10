// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";

import { getFirestore, doc, deleteDoc, updateDoc } from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Auth
const auth = getAuth(firebaseApp);

export const loginEmailPassword = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then(console.log(auth))
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

export const logout = async () => {
  await signOut(auth);
};

export const monitorAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.email);
    } else {
      console.log(`You're not logged in.`);
    }
  });
};

//FireStore
export default getFirestore(firebaseApp);

//DeleteDoc
export function deleteCourse(id) {
  deleteDoc(doc(getFirestore(firebaseApp), "content", id));
}

//UpdateDescrt
export function updateDescrt(id, change) {
  updateDoc(doc(getFirestore(firebaseApp), "content", id), {
    descrt: change,
  });
}
