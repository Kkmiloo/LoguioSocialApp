import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { database } from '../config/firebaseConfig';
import { writeBatch } from 'firebase/firestore';

// cache.js

const cache = new Map();
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
  var startTime = performance.now();
  const cachedUserInfo = cache.get(uid); // Check if user info is already cached

  if (cachedUserInfo) {
    return cachedUserInfo; // Return cached user info if available
  }

  const userDoc = doc(database, 'users', uid);

  try {
    const userDocSnapshot = await getDoc(userDoc);
    if (userDocSnapshot.exists()) {
      const userInfo = userDocSnapshot.data();
      cache.set(uid, userInfo); // Cache the user info
      var endTime = performance.now();
      console.log(`Call to doSomething took ${endTime - startTime} milliseconds.`);
      return userInfo;
    } else {
      throw new Error('User document does not exist');
    }
  } catch (error) {
    console.error('Error getting user info:', error);
    throw error;
  }
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
