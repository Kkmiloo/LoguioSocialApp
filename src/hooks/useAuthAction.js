//import { useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  // onAuthStateChanged,
} from 'firebase/auth';

import { auth, database } from '../firebase/config/firebaseConfig';
import { useAppDispatch } from './store';
import { setUser, clearUser, setError } from '../redux/auth/authSlice';
import { doc, setDoc } from 'firebase/firestore';
import { createUserInfo, getUserInfo, postUserInfo } from '../firebase/functions/firebaseFirestore';

export default function useAuth() {
  const dispatch = useAppDispatch();
  //const [error, setError] = useState(null);

  const signUp = async ({ email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const user = await createUserInfo(userCredential.user.uid, {
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      });
      dispatch(setUser(user));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

  const signIn = async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = await getUserInfo(userCredential.user.uid);
      dispatch(setUser(user));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

  const logout = async () => {
    await signOut(auth);
    dispatch(clearUser());
  };

  const updateUserInfo = async (uid, info) => {
    try {
      const updatedUserInfo = await postUserInfo(uid, info);
      dispatch(setUser(updatedUserInfo));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
  return {
    updateUserInfo,
    signUp,
    signIn,
    logout,
  };
}
