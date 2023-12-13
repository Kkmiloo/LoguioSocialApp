import React from 'react';
import { useAppSelector } from '../hooks/store';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

function MainNavigator() {
  const { user } = useAppSelector((state) => state.auth);
  return user ? <AppNavigator /> : <AuthNavigator />;
}

export default MainNavigator;
