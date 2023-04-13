// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBclNq-GTCWvpsJgCPIe0zhQJOQS-hGAWQ",
  authDomain: "diploma-38781.firebaseapp.com",
  projectId: "diploma-38781",
  storageBucket: "diploma-38781.appspot.com",
  messagingSenderId: "1017165375886",
  appId: "1:1017165375886:web:1efe7028832293289c9cdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//получить список категорий (коллекция документов).
export const categoryCollection = collection(db, 'categories');