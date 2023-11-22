// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider,EmailAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcfpyIySirBMvXrAG3QfdDCKO7_eYBxFs",
  authDomain: "blogproject-f6c90.firebaseapp.com",
  projectId: "blogproject-f6c90",
  storageBucket: "blogproject-f6c90.appspot.com",
  messagingSenderId: "197309766268",
  appId: "1:197309766268:web:24d4a25bc826b8609907f9",
  measurementId: "G-MPDXEMEPG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const emailProvider=new EmailAuthProvider();