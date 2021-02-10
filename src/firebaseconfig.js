import Firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCR1Nuij93ie6007_g3jJAgheLE3ySZEx0",
  authDomain: "comfeco-management-system.firebaseapp.com",
  projectId: "comfeco-management-system",
  storageBucket: "comfeco-management-system.appspot.com",
  messagingSenderId: "484788062989",
  appId: "1:484788062989:web:1c090b2faed6ee99043e44",
};

const app = Firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();

export { db, auth };
