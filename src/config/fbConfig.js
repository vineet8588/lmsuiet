  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  import 'firebase/analytics';
  import 'firebase/storage';

  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAcIewIgMPkzlJv7DuEP1tIFY8QPQar4YE",
    authDomain: "lms-uiet.firebaseapp.com",
    projectId: "lms-uiet",
    storageBucket: "lms-uiet.appspot.com",
    messagingSenderId: "350823614964",
    appId: "1:350823614964:web:10f5f2e150249e332d11a1",
    measurementId: "G-PHW86BY09H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  firebase.analytics();

const storage = firebase.storage();

export {
  storage,
  firebase as default
}
