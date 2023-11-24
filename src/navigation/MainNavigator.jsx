import React from 'react';
import { useAppSelector } from '../hooks/store';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

function MainNavigator() {
  const { user } = useAppSelector((state) => state.user);
  console.log(user);
  return user ? <AppNavigator /> : <AuthNavigator />;
}

export default MainNavigator;
