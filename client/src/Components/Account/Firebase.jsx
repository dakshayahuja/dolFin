import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAzbeXyhc4sl0fGhrwYdv6NCUhhi-KNkOY",
  authDomain: "dolfin-403ed.firebaseapp.com",
  projectId: "dolfin-403ed",
  storageBucket: "dolfin-403ed.appspot.com",
  messagingSenderId: "575645063875",
  appId: "1:575645063875:web:76ea869faebde06de6e076",
  measurementId: "G-QBGT3LTVEY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth};