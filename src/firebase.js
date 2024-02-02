import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB05WDXCoBenXsOsZO08YZydPVm_fbpxRw",
    authDomain: "astechinternational-291b7.firebaseapp.com",
    projectId: "astechinternational-291b7",
    storageBucket: "astechinternational-291b7.appspot.com",
    messagingSenderId: "143492889453",
    appId: "1:143492889453:web:9f0d3ba65f1729ee543864",
    measurementId: "G-0MKRQ3SRGY"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, db, storage };
