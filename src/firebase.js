import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: String(process.env.REACT_APP_API_KEY),
  authDomain: String(process.env.REACT_APP_AUTH_DOMAIN),
  projectId: String(process.env.REACT_APP_PROJECT_ID),
  storageBucket: String(process.env.REACT_APP_STORAGE_BUCKET),
  messagingSenderId: String(process.env.REACT_APP_API_MESSAGING_SENDER_ID),
  appId: String(process.env.REACT_APP_APP_ID),
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;
