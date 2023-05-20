// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxc9DxbQKN465s_m6f1XbFwtb1xzyaJWQ",
  authDomain: "myapp-92e5a.firebaseapp.com",
  projectId: "myapp-92e5a",
  storageBucket: "myapp-92e5a.appspot.com",
  messagingSenderId: "910226997419",
  appId: "1:910226997419:web:a2fd1f17428c0f39b637ee",
  measurementId: "G-5MSRESJ73X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app