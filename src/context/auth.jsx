import * as React from 'react';
import { router, useRootNavigationState, useSegments } from 'expo-router';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/config/firebaseConfig';

const initialState = {
  id: '',
  createdAt: '',
  displayName: '',
  lastLoginAt: '',
  photoUrl: '',
  email: '',
};

const contextInitialState = {
  user: initialState,
  signIn: () => {},
  signOut: () => {},
};

const AuthContext = React.createContext(contextInitialState);

export function useAuth() {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

function useProtectedRoute(user) {
  const segmentes = useSegments();
  const navigationState = useRootNavigationState();
  const [hasNavigated, setHasNavigated] = React.useState(false);
  console.log(navigationState);

  React.useEffect(() => {
    if (!navigationState?.key || hasNavigated) return;
    const inAuthGroup = segmentes[0] === '(auth)';

    if (!user.uid && inAuthGroup) {
      router.replace('/(auth)/sign-in', { replace: true });
      setHasNavigated(true);
    } else if (user.uid && inAuthGroup) {
      router.replace('/(tabs)', { replace: true });
      setHasNavigated(true);
    }
  }, [user.uid, segmentes, navigationState, hasNavigated]);
}

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(initialState);

  useProtectedRoute(user);

  React.useEffect(() => {
    const unsusbcribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const data = {
          id: user.uid,
          createdAt: user.metadata.creationTime,
          displayName: user.displayName,
          lastLoginAt: user.metadata.lastSignInTime,
          photoUrl: user.photoURL,
          email: user.email,
        };
        console.log(user);
        setUser(data);
        router.replace('/(tabs)', { replace: true });
      } else {
        console.log('user is not authenticated');
        router.replace('/(auth)/sign-in', { replace: true });
      }
    });
    return () => unsusbcribeAuth();
  }, [user]);
  return (
    <AuthContext.Provider
      value={{
        user,
        signIn: setUser,
        signOut: () => {
          setUser(initialState);
          signOut(auth);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
