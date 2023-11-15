import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { auth } from '../../../config/firebaseConfig';

class AuthService {
  static async singUp(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error al registrar el usuario:', error.message);
      throw error;
    }
  }

  static async signIn(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      throw error;
    }
  }

  static async signOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
      throw error;
    }
  }
}

export default AuthService;
