import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 
const firebaseConfig = {
    apiKey: "AIzaSyAzJ_0K4NtiZd7qh_rg5DGfjMMBUrHVdi4",
    authDomain: "slack-clone-82abb.firebaseapp.com",
    projectId: "slack-clone-82abb",
    storageBucket: "slack-clone-82abb.appspot.com",
    messagingSenderId: "963343074404",
    appId: "1:963343074404:web:9f090cb04faa6db8ad4b71",
    measurementId: "G-1HHNPZ3BDD"
};
  

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
    
export default db;