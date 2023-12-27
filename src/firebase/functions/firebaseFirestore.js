import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { database } from '../config/firebaseConfig';

export const postUserInfo = async (uid, info) => {
  const userDoc = doc(database, 'users', uid);
  await updateDoc(userDoc, {
    profileCompleted: true,
    ...info,
  });
  const userDocSnapshot = await getDoc(userDoc);
  return userDocSnapshot.data();
};

export const getUserInfo = async (uid) => {
  const userDoc = doc(database, 'users', uid);

  const userDocSnapshot = await getDoc(userDoc);
  return userDocSnapshot.data();
};

export const createUserInfo = async (uid, info) => {
  const userDoc = doc(database, 'users', uid);
  await setDoc(userDoc, {
    profileCompleted: false,
    ...info,
  });
  const userDocSnapshot = await getDoc(userDoc);
  return userDocSnapshot.data();
};
