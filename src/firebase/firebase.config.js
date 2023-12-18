// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc2tS2h0XULCLZ7di_eDEa3Ir-CbfK-F8",
  authDomain: "task-f8c1a.firebaseapp.com",
  projectId: "task-f8c1a",
  storageBucket: "task-f8c1a.appspot.com",
  messagingSenderId: "720764591321",
  appId: "1:720764591321:web:3b156b249fde1c4af632c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
