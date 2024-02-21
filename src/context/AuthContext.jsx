import React from 'react';
import { useStorageState } from './useStorageState';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import { auth } from '../firebase/config/firebaseConfig';
import firebaseErrors from '../firebase/firebaseErrors';
import { createUserInfo, getUserInfo, postUserInfo } from '../firebase/functions/firebaseFirestore';

const AuthContext = React.createContext({
  signIn: async () => null,
  signOut: () => null,
  signUp: async () => null,
  completeProfile: async () => null,
  clearError: () => null,
  session: null,
  isLoading: false,
  sessionLoading: false,
  error: null,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider(props) {
  const [[sessionLoading, session], setSession] = useStorageState('session');
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const signIn = async (email, password) => {
    try {
      setIsLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = await getUserInfo(userCredential.user.uid);
      setSession(JSON.stringify(user));
    } catch (e) {
      console.log(e.message);
      setError(firebaseErrors[e.code] || e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email, password) => {
    try {
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = await createUserInfo(userCredential.user.uid, {
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      });
      setSession(JSON.stringify(user));
    } catch (e) {
      console.log('err', e.message);
      setError(firebaseErrors[e.code] || e.message);
      throw new Error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    firebaseSignOut(auth);
    setSession(null);
  };

  const completeProfile = async (userUid, data) => {
    try {
      const user = await postUserInfo(userUid, data);

      setSession(JSON.stringify(user));
    } catch (e) {
      console.log(e.message);
      setError(firebaseErrors[e.code] || e.message);
    }
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        signUp,
        completeProfile,
        clearError,
        session,
        isLoading,
        error,
        setError,
        sessionLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
