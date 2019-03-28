 import firebase from 'firebase/app';
 import 'firebase/storage';
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBDhe0HsuYEWNPcnABI2i2X94lXRcthmLY",
    authDomain: "bucketlist-c3666.firebaseapp.com",
    databaseURL: "https://bucketlist-c3666.firebaseio.com",
    projectId: "bucketlist-c3666",
    storageBucket: "bucketlist-c3666.appspot.com",
    messagingSenderId: "1077501426212"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export { storage, firebase as default};