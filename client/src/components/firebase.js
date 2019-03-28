 import firebase from 'firebase/app';
 import 'firebase/storage';
 import axios from 'axios';
 var firebaseKey;
 
 axios.get("/api/user/apiKeys").then(res=> firebaseKey=res.data.firebase);

 // Initialize Firebase
 var config = {
    apiKey: firebaseKey,
    authDomain: "bucketlist-c3666.firebaseapp.com",
    databaseURL: "https://bucketlist-c3666.firebaseio.com",
    projectId: "bucketlist-c3666",
    storageBucket: "bucketlist-c3666.appspot.com",
    messagingSenderId: "1077501426212"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export { storage, firebase as default};