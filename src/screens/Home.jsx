import React from 'react';
import { View, Text, Button } from 'react-native';
import useAuth from '../hooks/useAuthAction';

function HomeScreen() {
  const { logout } = useAuth();
  const handleLogout = () => {
    console.log('logout');
    logout();
  };
  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="LogOut" onPress={handleLogout} />
    </View>
  );
}

export default HomeScreen;
