import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDYDnTtYDTR_mXKhhA7z2HBvsEby_eq794",
  authDomain: "portfolio-80da0.firebaseapp.com",
  projectId: "portfolio-80da0",
  storageBucket: "portfolio-80da0.appspot.com",
  messagingSenderId: "747380165798",
  appId: "1:747380165798:web:35f2b0e17046b03d2fb867"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)