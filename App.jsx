import { NavigationContainer } from '@react-navigation/native';

import React from 'react';

import AppNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/redux';
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
