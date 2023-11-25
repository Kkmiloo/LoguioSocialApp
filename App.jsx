/* global require */
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import React, { useCallback, useEffect } from 'react';
import AppNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/redux';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Dhyana: require('./src/assets/fonts/Dhyana-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <View onLayout={onLayout} style={{ flex: 1 }}>
          <AppNavigator />
        </View>
      </NavigationContainer>
    </Provider>
  );
}
