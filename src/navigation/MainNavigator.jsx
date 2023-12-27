import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

import { handleAuthStateChanged } from '../redux/auth/authSlice';
import { useNavigation } from '@react-navigation/native';

function MainNavigator() {
  const { user } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    if (user) {
      if (!user.profileCompleted) {
        navigation.navigate('RoleSignUp');
      }
    }
  }, [user]); // Empty dependency array

  /* useEffect(() => {
    console.log('MainNavigator useEffect', user);
    dispatch(handleAuthStateChanged());
  }, [dispatch]); */

  return !user || !user?.profileCompleted ? <AuthNavigator /> : <AppNavigator />;
}

export default MainNavigator;
