import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCFsWvYKhuViloiqbGVFdZZBvbJiN2hGjs",
    authDomain: "clone-build-4.firebaseapp.com",
    projectId: "clone-build-4",
    storageBucket: "clone-build-4.appspot.com",
    messagingSenderId: "624509668671",
    appId: "1:624509668671:web:65113facb2ffc0e072978a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore(); //Db cloudfirestore

const auth = firebase.auth();

const storage = getStorage()

const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider, storage}
