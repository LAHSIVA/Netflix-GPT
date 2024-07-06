// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBSB90Wz9KlG_2wf3_tTXMe4amOsC095g",
  authDomain: "netflixgpt-eef01.firebaseapp.com",
  projectId: "netflixgpt-eef01",
  storageBucket: "netflixgpt-eef01.appspot.com",
  messagingSenderId: "419227429366",
  appId: "1:419227429366:web:7e946caa5c0de5e4857fd7",
  measurementId: "G-7MHB8C0NMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);