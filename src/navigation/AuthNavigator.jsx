import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/login/Login';
import SignUpScreen from '../screens/auth/signUp/SignUp';

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
