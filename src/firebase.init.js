// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4taq59LoVUi1_BrCC6bRUlpSpxcyFxFY",
  authDomain: "independent-service-prov-ef735.firebaseapp.com",
  projectId: "independent-service-prov-ef735",
  storageBucket: "independent-service-prov-ef735.appspot.com",
  messagingSenderId: "279288326986",
  appId: "1:279288326986:web:dd25320499e1128045afb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

/* 
npm install -g firebase-tools
firebase login
firebase init
firebase deploy

*/