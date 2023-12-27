import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/login/LoginScreen';
import SignUpScreen from '../screens/auth/signUp/SignUpScreen';
import DataSignUp from '../screens/auth/signUp/DataSignUp';
import RoleSignUp from '../screens/auth/signUp/RoleSignUp';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="signUp" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RoleSignUp" component={RoleSignUp} options={{ headerShown: false }} />
      <Stack.Screen name="DataSignUp" component={DataSignUp} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
