import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAlsLDOfPOP7NEMZwDEPED1f-Ueo2xDtPE",
    authDomain: "reactapptest-320fc.firebaseapp.com",
    databaseURL: "https://reactapptest-320fc-default-rtdb.firebaseio.com",
    projectId: "reactapptest-320fc",
    storageBucket: "reactapptest-320fc.appspot.com",
    messagingSenderId: "918391432350",
    appId: "1:918391432350:web:8627f846a433b9cbf9478f"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();