// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0rmyWLfBeCqA1GS989Ao2nsOJ1dx63v0",
  authDomain: "react-level2-5eb47.firebaseapp.com",
  projectId: "react-level2-5eb47",
  storageBucket: "react-level2-5eb47.appspot.com",
  messagingSenderId: "139795525883",
  appId: "1:139795525883:web:9c19b0a5a35e856109005e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
