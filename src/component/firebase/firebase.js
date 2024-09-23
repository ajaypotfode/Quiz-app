import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjUVR8Wb3tEY3RH_sZCg_1dTiz-DTQa3o",
  authDomain: "chat-app-9a6d1.firebaseapp.com",
  projectId: "chat-app-9a6d1",
  storageBucket: "chat-app-9a6d1.appspot.com",
  messagingSenderId: "533293854496",
  appId: "1:533293854496:web:2d4fad13817cc3447af145",
  measurementId: "G-RLT2EMDR2T"
};

  export const app=initializeApp(firebaseConfig)
  export const auth = getAuth(app)
  export const db = getFirestore(app);