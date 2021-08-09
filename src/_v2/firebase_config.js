import firebase from 'react/firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBSYZkIJm0O_qjfNez1KBevIWT_lPY7lkw",
  authDomain: "listaapp-aab6d.firebaseapp.com",
  projectId: "listaapp-aab6d",
  storageBucket: "listaapp-aab6d.appspot.com",
  messagingSenderId: "333626582574",
  appId: "1:333626582574:web:30eac2cf1feaf379cfe1bf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db  = firebase.firestore()

export {db}