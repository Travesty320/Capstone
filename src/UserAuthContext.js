import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { auth } from "./firebase-config";
import { getDatabase, ref, child, get  } from "firebase/database";


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

  const [user, setUser] = useState({});
  const [cart, setCart] = useState({ size:0 });

  

  const getCart = async (user) => {
    const dbRef = ref(getDatabase())
    const snapshot = await get(child(dbRef, `/${user.uid}/cart`))
    if (snapshot.exists()){
      setCart(snapshot.val())
    }
  }

  useEffect(()=>{if (user.uid){getCart(user)}},[])

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
      getCart(currentuser);
  });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, cart, setCart }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}