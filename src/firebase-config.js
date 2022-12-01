import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDH68qonA83JHJZxXhIMqJz_0lRjYJA9PI",
  authDomain: "grocery-store-7e587.firebaseapp.com",
  projectId: "grocery-store-7e587",
  storageBucket: "grocery-store-7e587.appspot.com",
  messagingSenderId: "958398471598",
  appId: "1:958398471598:web:28b8ff5bb8c1c0d48afc3f",
  measurementId: "G-MW3YDVVZMF",
  databaseUrl: 'https://grocery-store-7e587-default-rtdb.firebaseio.com/'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const database = getDatabase(app);
export default app;