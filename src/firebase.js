import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_9ec9OR6OjCXBKNC1Jw95gCbJihvY89Q",
  authDomain: "clone-d4791.firebaseapp.com",
  projectId: "clone-d4791",
  storageBucket: "clone-d4791.appspot.com",
  messagingSenderId: "788348066996",
  appId: "1:788348066996:web:4a9bccad47ca8d72e00be1",
  measurementId: "G-P7P4TWE8RH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
