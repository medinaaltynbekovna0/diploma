// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import {GoogleAuthProvider, getAuth,  signOut, signInWithPopup, onAuthStateChanged} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBclNq-GTCWvpsJgCPIe0zhQJOQS-hGAWQ",
  authDomain: "diploma-38781.firebaseapp.com",
  projectId: "diploma-38781",
  storageBucket: "diploma-38781.appspot.com",
  messagingSenderId: "1017165375886",
  appId: "1:1017165375886:web:c0d1fb59f07103709c9cdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
const auth= getAuth(app);


//получить список категорий (коллекция документов).
export const categoryCollection = collection(db, 'categories');
export const productCollection = collection(db,'products');
export const orderCollection = collection(db, 'orders');

const provider = new GoogleAuthProvider();
export const logIn = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);