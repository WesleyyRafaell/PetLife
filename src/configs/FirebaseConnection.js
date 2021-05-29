import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyDSW7t3bOwB0Eytir6lRv9ju7Gjf3Si_oU",
  authDomain: "pet-life-bf1f0.firebaseapp.com",
  projectId: "pet-life-bf1f0",
  storageBucket: "pet-life-bf1f0.appspot.com",
  messagingSenderId: "623061648971",
  appId: "1:623061648971:web:f1aab7bb8484248d63afce",
  measurementId: "G-D63VDJ4G97"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

// let storage = firebase.storage();

export default firebase;