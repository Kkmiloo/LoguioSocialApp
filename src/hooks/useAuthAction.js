//import { useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  // onAuthStateChanged,
} from 'firebase/auth';

import { auth, database } from '../config/firebaseConfig';
import { useAppDispatch } from './store';
import { loginUser, logoutUser } from '../redux/auth/authSlice';
import { doc, setDoc } from 'firebase/firestore';

export default function useAuth() {
  const dispatch = useAppDispatch();
  //const [error, setError] = useState(null);

  /*   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(loginUser(user));
      } else {
        dispatch(logoutUser());
      }
    });

    console.log('unsubscribe', unsubscribe);

    return () => unsubscribe();
  }, [dispatch]); */

  const signUp = async ({ email, password }) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = JSON.stringify(userCredential.user);

    await setDoc(doc(database, 'users', userCredential.user.uid), {
      email: userCredential.user.email,
      uid: userCredential.user.uid,
    });

    dispatch(loginUser(user));
  };

  const signIn = async ({ email, password }) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = JSON.stringify(userCredential.user);
    dispatch(loginUser(user));
  };

  const logout = async () => {
    await signOut(auth);
    dispatch(logoutUser());
  };

  return {
    // error,
    signUp,
    signIn,
    logout,
  };
}
