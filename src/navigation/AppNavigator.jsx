import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
