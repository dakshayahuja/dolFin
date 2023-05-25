import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC3YQVEarpnGBkHIpUOyUL-3JSXI_8Ln-E",
  authDomain: "dolfin-react.firebaseapp.com",
  projectId: "dolfin-react",
  storageBucket: "dolfin-react.appspot.com",
  messagingSenderId: "411881768212",
  appId: "1:411881768212:web:232fc8f727d743d6eeee01",
  measurementId: "G-R1WGYN5BNQ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
