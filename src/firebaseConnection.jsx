import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAMHObLQoPtIaB1zfjkhGmR18Iy-EXCisU",
    authDomain: "curso-firebase-e57a5.firebaseapp.com",
    projectId: "curso-firebase-e57a5",
    storageBucket: "curso-firebase-e57a5.appspot.com",
    messagingSenderId: "1064245116817",
    appId: "1:1064245116817:web:77390ab498aae614ec2430",
    measurementId: "G-WZZRT4ZLF6"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth }