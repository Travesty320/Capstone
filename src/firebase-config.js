import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDH68qonA83JHJZxXhIMqJz_0lRjYJA9PI",
  authDomain: "grocery-store-7e587.firebaseapp.com",
  projectId: "grocery-store-7e587",
  storageBucket: "grocery-store-7e587.appspot.com",
  messagingSenderId: "958398471598",
  appId: "1:958398471598:web:28b8ff5bb8c1c0d48afc3f",
  measurementId: "G-MW3YDVVZMF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;