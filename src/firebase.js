import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {initializeApp} from "firebase/app";
import "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqlp_TFcVRwjmtaYBjJiE8m5EmoQNUCjI",
    authDomain: "c-news-neilk.firebaseapp.com",
    projectId: "c-news-neilk",
    storageBucket: "c-news-neilk.appspot.com",
    messagingSenderId: "117336308754",
    appId: "1:117336308754:web:8da6d338270f182358accb",
    measurementId: "G-6JEVL1073J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;