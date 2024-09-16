import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDnm7h_GK5Ts4bsj02ISgGUbC15DIGzZOg",
  authDomain: "note-sharing-4f2d4.firebaseapp.com",
  projectId: "note-sharing-4f2d4",
  storageBucket: "note-sharing-4f2d4.appspot.com",
  messagingSenderId: "515399990118",
  appId: "1:515399990118:web:545e78f23095859ad7a6a7",
  measurementId: "G-876JMJ8LLE"
  };

  export const app=initializeApp(firebaseConfig)
  export const auth = getAuth(app)