// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkZm_32Q2ZXA4V6BzP5yuQ4TuJcTVfao0",
  authDomain: "medium-clone-17f95.firebaseapp.com",
  projectId: "medium-clone-17f95",
  storageBucket: "medium-clone-17f95.appspot.com",
  messagingSenderId: "655714122196",
  appId: "1:655714122196:web:b0567ed1415cf3b1327e41"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);