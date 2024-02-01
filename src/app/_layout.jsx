import { View, Text } from 'react-native';
import React from 'react';

import { Slot } from 'expo-router';
import { SessionProvider } from '../context/ctx';

const RootLayoutNav = () => {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
};

export default RootLayoutNav;
