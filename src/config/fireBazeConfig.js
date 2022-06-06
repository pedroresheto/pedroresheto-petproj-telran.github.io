
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPxIH4LExZkVrUDF-TBjoecn2DonoNoPI",
    authDomain: "isr-guru-reshetov.firebaseapp.com",
    projectId: "isr-guru-reshetov",
    storageBucket: "isr-guru-reshetov.appspot.com",
    messagingSenderId: "315087205207",
    appId: "1:315087205207:web:fccff13d663e65f3bd8412"
};


export const fb = firebase.initializeApp(firebaseConfig)


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
