import React, { useEffect } from 'react';
import { useStorageState } from './useStorageState';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config/firebaseConfig';
import firebaseErrors from '../firebase/firebaseErrors';

const AuthContext = React.createContext({
  signIn: async () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
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
  const [[isLoading, session], setSession] = useStorageState('session');
  const [error, setError] = React.useState(null);

  /*  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userString = JSON.stringify(user);

        setSession([false, userString]);
      } else {
        setSession(null);
      }
    });

    return () => unsuscribe();
  }, []); */

  return (
    <AuthContext.Provider
      value={{
        signIn: async (email, password) => {
          // Perform sign-in logic here
          try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            const userString = JSON.stringify(user);
            console.log('User', userString);

            setSession([false, userString]);
          } catch (e) {
            console.log(e.message);
            setError(firebaseErrors[e.code] || e.message);
          }
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
        error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
