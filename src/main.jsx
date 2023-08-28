import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6ZsMwWiUQ5mJSJfXDmW8iafSSyi6Tbl8",
  authDomain: "gamerparadise-d521b.firebaseapp.com",
  projectId: "gamerparadise-d521b",
  storageBucket: "gamerparadise-d521b.appspot.com",
  messagingSenderId: "771070655457",
  appId: "1:771070655457:web:7092f5fe9af719bde830a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
