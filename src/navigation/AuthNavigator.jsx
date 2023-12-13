import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/login/Login';
import SignUpScreen from '../screens/Auth/signUp/SignUp';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="signUp" component={SignUpScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
