import React, { useEffect } from 'react';
import { useStorageState } from './useStorageState';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config/firebaseConfig';

const AuthContext = React.createContext({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
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
  const [[isLoading, session], setSession] = useStorageState('session');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('hola');
        setSession(user);
      } else {
        console.log('none');
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn: async (email, password) => {
          // Perform sign-in logic here
          try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
            setSession(user);
          } catch (e) {
            console.log(e);
          }
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
