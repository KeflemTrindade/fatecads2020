import firebase from "firebase/app";
import 'firebase/database'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDmd927334ol9zfxAdJKxh7gAyxeSW8wXI",
    authDomain: "meuapp-34237.firebaseapp.com",
    databaseURL: "https://meuapp-34237-default-rtdb.firebaseio.com",
    projectId: "meuapp-34237",
    storageBucket: "meuapp-34237.appspot.com",
    messagingSenderId: "376698605920",
    appId: "1:376698605920:web:4fd1c7d0772d50101c4e05",
    measurementId: "G-RY341VKJCW"
  };
  // Initialize Firebase
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;