import firebase from 'firebase/app';
import 'firebase/auth';  //import this file for authentication
// import 'firebase/database';    //import this file for database
const firebaseConfig = {
    apiKey: "AIzaSyC9871MOe9wK5Qhs_JpmMpV1wjdHNPEjUI",
    authDomain: "chat-app-7b3ef.firebaseapp.com",
    databaseURL: "https://chat-app-7b3ef-default-rtdb.firebaseio.com",
    projectId: "chat-app-7b3ef",
    storageBucket: "chat-app-7b3ef.appspot.com",
    messagingSenderId: "7755659777",
    appId: "1:7755659777:web:b2be09b2713c3407775e00"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// export const auth = app.auth();
// export const database = app.database();
export const auth = app.auth()
