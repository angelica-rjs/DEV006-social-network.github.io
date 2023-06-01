// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';

// import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDOU7BlIf_BBE7_MUDfkNFlAuvCWqscfMg',
  authDomain: 'social-network-17eb4.firebaseapp.com',
  projectId: 'social-network-17eb4',
  storageBucket: 'social-network-17eb4.appspot.com',
  messagingSenderId: '775373625184',
  appId: '1:775373625184:web:ac1209b244e2d83bdcf005',
  measurementId: 'G-7M4HS38DST',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const colRef = collection(db, 'post');
console.log(db);
