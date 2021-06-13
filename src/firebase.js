import firebase from "firebase/app";
import "firebase/auth";
//console.firebase.google.com/u/0/project/unichat-c2cb9/authentication/providers

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyD3-VVJc3mH54i1qwbgTe1sSi-16pBQebc",
    authDomain: "unichat-c2cb9.firebaseapp.com",
    projectId: "unichat-c2cb9",
    storageBucket: "unichat-c2cb9.appspot.com",
    messagingSenderId: "426139583991",
    appId: "1:426139583991:web:93add3f12c100fdb0e1af2",
  })
  .auth();
