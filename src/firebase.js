import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-rbJqjMaw6l986C4uV6X9RUDfy4-p0gs",
  authDomain: "reels-fbfc2.firebaseapp.com",
  projectId: "reels-fbfc2",
  storageBucket: "reels-fbfc2.appspot.com",
  messagingSenderId: "398940743140",
  appId: "1:398940743140:web:78877227afdc9101c493f1",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

let provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
