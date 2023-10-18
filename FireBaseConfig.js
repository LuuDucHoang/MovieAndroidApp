// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUcvw4_3nDQfCSZtcT4mi5oCxrqul6vhU",
  authDomain: "authen-64f9c.firebaseapp.com",
  projectId: "authen-64f9c",
  storageBucket: "authen-64f9c.appspot.com",
  messagingSenderId: "994976320313",
  appId: "1:994976320313:web:45c43bf5559223e65df6e8",
  measurementId: "G-4WZBWXCJ5D",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(firebaseConfig);
export const analytics = getAnalytics(FirebaseApp);
