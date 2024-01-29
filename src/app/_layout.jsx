import { View, Text } from 'react-native';
import React from 'react';
import { AuthProvider } from '../context/auth';
import { Slot } from 'expo-router';

const RootLayoutNav = () => {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
};

export default RootLayoutNav;
