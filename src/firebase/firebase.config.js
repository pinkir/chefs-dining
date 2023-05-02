// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxlZAw2Jin1prs8hWFy4H9atA9V-sdvCA",
  authDomain: "chefs-dining.firebaseapp.com",
  projectId: "chefs-dining",
  storageBucket: "chefs-dining.appspot.com",
  messagingSenderId: "337246457641",
  appId: "1:337246457641:web:bd422852cd350fbf0e3138"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;