import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const config = {
  apiKey: "AIzaSyBuI9lkpBb50-siU95UI7pdWelTtUdO4dw",
  authDomain: "rantapp-7524d.firebaseapp.com",
  databaseURL: "https://rantapp-7524d.firebaseio.com",
  projectId: "rantapp-7524d",
  storageBucket: "rantapp-7524d.appspot.com",
  messagingSenderId: "668574783370",
  appId: "1:668574783370:web:5cf9515c7602a174795a73",
  measurementId: "G-KTNFR0LQZJ",
};
firebase.initializeApp(config);
firebase.firestore(); // <- needed if using firestore

export default firebase;
