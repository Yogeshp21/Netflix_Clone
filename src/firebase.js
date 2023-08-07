import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC0JXTJSgLYfgnFIK-FNQjch27iZfVWqaw",
  authDomain: "netflix-clone-f14e6.firebaseapp.com",
  projectId: "netflix-clone-f14e6",
  storageBucket: "netflix-clone-f14e6.appspot.com",
  messagingSenderId: "228005351767",
  appId: "1:228005351767:web:3e96ccb3b66ed584856e12"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;
