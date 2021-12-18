// import * as firebase from "firebase/app";

// import 'firebase/firestore';

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyBs4qAUaw3EQ7zOpw7kSnSFAzJS1kJHZWY",
//   authDomain: "fir-todo-3a7d1.firebaseapp.com",
//   projectId: "fir-todo-3a7d1",
//   storageBucket: "fir-todo-3a7d1.appspot.com",
//   messagingSenderId: "313924737187",
//   appId: "1:313924737187:web:36d83426a64b4a58180716",
//   measurementId: "G-H2PCG3RC85",
// });

// const db = firebaseApp.firestore();
// export default db;


import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBs4qAUaw3EQ7zOpw7kSnSFAzJS1kJHZWY",
  authDomain: "fir-todo-3a7d1.firebaseapp.com",
  projectId: "fir-todo-3a7d1",
  storageBucket: "fir-todo-3a7d1.appspot.com",
  messagingSenderId: "313924737187",
  appId: "1:313924737187:web:36d83426a64b4a58180716",
  measurementId: "G-H2PCG3RC85"
})


const db = firebaseApp.firestore();

export default db;


