// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgEOSIcmXoyxAnducWyoo_8i2NH41JaxM",
  authDomain: "treinamento-clinicorp-1.firebaseapp.com",
  projectId: "treinamento-clinicorp-1",
  storageBucket: "treinamento-clinicorp-1.appspot.com",
  messagingSenderId: "744909778203",
  appId: "1:744909778203:web:813f4f82d47d7c10ffb7be",
  measurementId: "G-QDDHR86L85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;