  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  import 'firebase/analytics';
  import 'firebase/storage';

  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBtwYRC_kSmz5bqcrB6jJ97kGl1hq_n5tE",
    authDomain: "lmsuiet.firebaseapp.com",
    databaseURL: "https://lmsuiet.firebaseio.com",
    projectId: "lmsuiet",
    storageBucket: "lmsuiet.appspot.com",
    messagingSenderId: "920374402784",
    appId: "1:920374402784:web:1aaa059f7f26bb84f0fa85",
    measurementId: "G-TXFWFBYMT8"
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
