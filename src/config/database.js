import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGEBUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
} = process.env.NODE_ENV;
const FIREBASECONFIG = {
  // apiKey: REACT_APP_FIREBASE_API_KEY,
  // authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: REACT_APP_FIREBASE_STORAGEBUCKET,
  // messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: REACT_APP_FIREBASE_APP_ID,
  apiKey: "AIzaSyCqyck0GqLEvWOByGagB89bJRQ8Qd40neM",
  authDomain: "a-van-397a3.firebaseapp.com",
  databaseURL: "https://a-van-397a3-default-rtdb.firebaseio.com",
  projectId: "a-van-397a3",
  storageBucket: "a-van-397a3.appspot.com",
  messagingSenderId: "323365645461",
  appId: "1:323365645461:web:38663bfb2f83f53ad13f9c",
};

const app = initializeApp(FIREBASECONFIG);
const db = getFirestore(app);
export default db;
