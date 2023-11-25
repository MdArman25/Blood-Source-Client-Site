/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

// import useAxiosPublic from "../Hooks/useAxiosPublic";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const Provider = ({ children }) => {
  // const AxiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updeateProfile = (name, photoURL) => {
    console.log( name, photoURL);
    console.log(auth.currentUser);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
    return;
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (User) => {
      const userEmail = User?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(User);
      console.log("Curent user", User);

      // if (User) {
      //   AxiosPublic.post("/jwt", loggedUser).then((res) => {
      //     // console.log("token response", res.data);
      //   });
      // } else {
      //   AxiosPublic.post("/logout", loggedUser, {
      //     withCredentials: true,
      //   }).then((res) => {
      //     // console.log("logout",res.data);
      //   });
      // }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    updeateProfile,
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    logOut,
  };
  // console.log(authInfo);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;
