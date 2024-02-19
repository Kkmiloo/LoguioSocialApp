import { confirmPasswordReset, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

export const passwordReset = async (email) => {
  return await sendPasswordResetEmail(auth, email);
};

export const confirmThePasswordReset = async (oobCode, newPassword) => {
  if (!oobCode && !newPassword) return;

  return await confirmPasswordReset(auth, oobCode, newPassword);
};
