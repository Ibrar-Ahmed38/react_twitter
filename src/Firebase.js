
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBLdWUxN_qVgdTXtlwFBMOao3Wxi51-uSQ",
  authDomain: "twitter-clone-50aad.firebaseapp.com",
  projectId: "twitter-clone-50aad",
  storageBucket: "twitter-clone-50aad.appspot.com",
  messagingSenderId: "994120236661",
  appId: "1:994120236661:web:78dbb67dca1f6c05a2823c",
  measurementId: "G-63H55DM60G"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
