// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvttTjMtMZ2unmjwYnyHybQaqtN593abc",
  authDomain: "login-register-project-f9279.firebaseapp.com",
  projectId: "login-register-project-f9279",
  storageBucket: "login-register-project-f9279.firebasestorage.app",
  messagingSenderId: "733887500639",
  appId: "1:733887500639:web:9e2b3a07c741e22a69a6ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
