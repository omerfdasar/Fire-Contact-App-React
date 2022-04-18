// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxlKr_GIM7xCZadcHxslUs4oPVWbii_ms",
  authDomain: "fir-contact-app-95b1f.firebaseapp.com",
  databaseURL: "https://fir-contact-app-95b1f-default-rtdb.firebaseio.com",
  projectId: "fir-contact-app-95b1f",
  storageBucket: "fir-contact-app-95b1f.appspot.com",
  messagingSenderId: "719650263815",
  appId: "1:719650263815:web:7edd49554526d46a856ba2",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
