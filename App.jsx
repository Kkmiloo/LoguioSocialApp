/* global require */
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import React, { useCallback } from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/redux';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Dhyana: require('./src/assets/fonts/Dhyana-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
          <Provider store={store}>
            <NavigationContainer>
              <MainNavigator />
            </NavigationContainer>
          </Provider>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
