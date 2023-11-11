// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCypnSJysSOeKt-5miRpHu_vDyEGfsEF6c",
  authDomain: "twitter-c18bc.firebaseapp.com",
  projectId: "twitter-c18bc",
  storageBucket: "twitter-c18bc.appspot.com",
  messagingSenderId: "482405717387",
  appId: "1:482405717387:web:9a376cacaf160384ec4b8e",
  measurementId: "G-NZJKTM5MW2"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth=getAuth(app);

export default auth