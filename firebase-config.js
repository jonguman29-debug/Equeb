import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


const firebaseConfig = {

  apiKey: "AIzaSyAY0ywZLUKj8UoxuVRJQS0oLsZ9QWUR000",

  authDomain: "equeb-b79a9.firebaseapp.com",

  projectId: "equeb-b79a9",

  storageBucket: "equeb-b79a9.firebasestorage.app",

  messagingSenderId: "602534699081",

  appId: "1:602534699081:web:ecc26cf4c8557fd9159f98"

};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


export {
  app,
  auth,
  db
};
