// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_Cgiz4mdKtLJFy5hh1QJxEbr31J7SCEE",
  authDomain: "bistro-boss-project.firebaseapp.com",
  projectId: "bistro-boss-project",
  storageBucket: "bistro-boss-project.appspot.com",
  messagingSenderId: "197368678943",
  appId: "1:197368678943:web:3456d6454f2b0ec9cfa32a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;