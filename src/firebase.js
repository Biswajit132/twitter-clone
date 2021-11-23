import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh15UpYm6FUR6ETHQlWWrbAmeaAXbqi94",
  authDomain: "twitter-clone-6b34a.firebaseapp.com",
  projectId: "twitter-clone-6b34a",
  storageBucket: "twitter-clone-6b34a.appspot.com",
  messagingSenderId: "992621736214",
  appId: "1:992621736214:web:34d3a56bed191649f26037",
  measurementId: "G-ZG36ER3Q92"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
