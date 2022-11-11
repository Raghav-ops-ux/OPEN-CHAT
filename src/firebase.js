// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsn3zS9E2z8pH-DdzdbxgviAZGHEU83aE",
  authDomain: "open-chat-9a41c.firebaseapp.com",
  projectId: "open-chat-9a41c",
  storageBucket: "open-chat-9a41c.appspot.com",
  messagingSenderId: "224790342491",
  appId: "1:224790342491:web:7f17f37575ecfd56af087e"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth()
 export const storage = getStorage();
 export const db = getFirestore()