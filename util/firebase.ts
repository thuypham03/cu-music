import { initializeApp, getApps, getApp } from "firebase/app"
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import withFirebaseAuth from "react-with-firebase-auth"

const apikey = process.env.REACT_APP_APIKEY;
const appId = process.env.REACT_APP_APPID;
const authDomain = process.env.REACT_APP_AUTHDOMAIN;
const projectId = process.env.REACT_APP_PROJECT_ID;
const storageBucket = process.env.REACT_APP_STORAGE_BUCKET;
const messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID;

// TODO: Replace with your own Firebase config
const firebaseConfig = {
  apiKey: `${apikey}`,
  authDomain: `${authDomain}`,
  projectId: `cu-music`,
  storageBucket: `${storageBucket}`,
  messagingSenderId: `${messagingSenderId}`,
  appId: `${appId}`,
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