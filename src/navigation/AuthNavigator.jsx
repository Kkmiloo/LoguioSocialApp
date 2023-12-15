import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/login/Login';
import SignUpScreen from '../screens/Auth/signUp/SignUp';
import DataSignUp from '../screens/Auth/signUp/DataSignUp';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="signUp" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DataSignUp" component={DataSignUp} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
