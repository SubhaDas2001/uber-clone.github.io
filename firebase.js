// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
import {useRouter} from 'next/router'
import { signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtx6e90iCfWPfVW7FXmq1BEwT4fqnLVJI",
  authDomain: "uber-next-clone-live-ee250.firebaseapp.com",
  projectId: "uber-next-clone-live-ee250",
  storageBucket: "uber-next-clone-live-ee250.appspot.com",
  messagingSenderId: "977462035050",
  appId: "1:977462035050:web:cd9cc5d3f567c3a3cbc013"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export{app, provider, auth}