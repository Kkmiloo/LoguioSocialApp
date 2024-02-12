/* global require */
import React, { useEffect } from 'react';

import { Slot, SplashScreen } from 'expo-router';
import { SessionProvider } from '../context/ctx';
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';

const RootLayoutNav = () => {
  const [fontsLoaded, fontError] = useFonts({
    Dhyana: require('../assets/fonts/Dhyana-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Prevent rendering until the font has loaded or an error was returned
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
};

export default RootLayoutNav;
