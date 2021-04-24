import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBd841bnpJgQiZaYb0z0mJeGQD5SwEXu20",
    authDomain: "firegram-19866.firebaseapp.com",
    projectId: "firegram-19866",
    storageBucket: "firegram-19866.appspot.com",
    messagingSenderId: "461058244998",
    appId: "1:461058244998:web:73678816e3c74105096c07"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp }; 