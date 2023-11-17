import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from 'firebase/auth';

import { auth } from '../../config/firebaseConfig';

export default function useAuth() {
  const [error, setError] = useState(null);

  async function signUp(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.error('Error al registrar el usuario:', e.message);
      setError(e);
    }
  }

  async function signIn(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.error('Error al iniciar sesión:', e.message);
      setError(e);
    }
  }

  async function logout() {
    try {
      await firebaseSignOut(auth);
    } catch (e) {
      console.error('Error al cerrar sesión:', e.message);
      setError(e);
    }
  }

  return {
    error,
    signUp,
    signIn,
    logout,
  };
}
