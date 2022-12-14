import { initializeApp, getApps, getApp } from "firebase/app"
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import withFirebaseAuth from "react-with-firebase-auth"

// TODO: Replace with your own Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDhUwVyZ9GryliVm2Enht9nMknh_8T_zEA",
  authDomain: "cu-music.firebaseapp.com",
  projectId: "cu-music",
  storageBucket: "cu-music.appspot.com",
  messagingSenderId: "1076834371330",
  appId: "1:1076834371330:web:bd15870a489834e157e41b",
  measurementId: "G-Y4GMEMMPTG"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)
const songsCollectionRef = collection(db, 'songs')
const usersCollectionRef = collection(db, 'users')

const providers = {
  googleProvider: new GoogleAuthProvider(),
}

const createComponentWithAuth = withFirebaseAuth({
  providers,
  firebaseAppAuth: auth,
})

const signInWithGoogle = () => {
  signInWithPopup(auth, providers.googleProvider)
    .catch(()=>alert("Only signed in users can add songs"))
}

const signOutFirebase = () => {
  signOut(auth)
}

export {
  db,
  auth,
  songsCollectionRef,
  usersCollectionRef,
  createComponentWithAuth,
  signInWithGoogle,
  signOutFirebase as signOut,
}