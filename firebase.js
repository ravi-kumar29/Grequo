import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCiYc6SRNPCL-90QVGAh1HeDRR-F4naEyU",
  authDomain: "quora-clone-26047.firebaseapp.com",
  projectId: "quora-clone-26047",
  storageBucket: "quora-clone-26047.appspot.com",
  messagingSenderId: "1002162956168",
  appId: "1:1002162956168:web:781622aa83c797521c3c3d",
  measurementId: "G-2V88WNVWT1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
