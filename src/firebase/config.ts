import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQtWuhfYx3ykQs3ShuYj5jKXP__ogG2Rw",
  authDomain: "sql-demos-e1c6b.firebaseapp.com",
  databaseURL: "https://sql-demos-e1c6b-default-rtdb.firebaseio.com",
  projectId: "sql-demos-e1c6b",
  storageBucket: "sql-demos-e1c6b.appspot.com",
  messagingSenderId: "961257930460",
  appId: "1:961257930460:web:0c95887698b3d034c4be19",
  measurementId: "G-R1YWZZ8CVT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

console.log("Firebase Configurado");

export default firebase.firestore();
