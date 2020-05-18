import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBtFNB_DB-r7iUe8qcCBty4PS-7aUhT6zw",
    authDomain: "herosite-60fd9.firebaseapp.com",
    databaseURL: "https://herosite-60fd9.firebaseio.com",
    projectId: "herosite-60fd9",
    storageBucket: "herosite-60fd9.appspot.com",
    messagingSenderId: "179188203299",
    appId: "1:179188203299:web:10b1127961989bbec81696",
    measurementId: "G-NQ2BE37NV4"
  };
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  
  export default firebase;