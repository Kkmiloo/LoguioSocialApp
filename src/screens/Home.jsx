import React from 'react';
import { View, Text, Button } from 'react-native';
import useAuth from '../hooks/useAuthAction';
import { useAppSelector } from '../hooks/store';

function HomeScreen() {
  const { logout } = useAuth();
  const { user } = useAppSelector((state) => state.auth);

  const parserUser = JSON.parse(user);
  const handleLogout = () => {
    logout();
  };
  return (
    <View>
      <Text>Welcome to the Home Screen! {parserUser.email} </Text>
      <Button title="LogOut" onPress={handleLogout} />
    </View>
  );
}

export default HomeScreen;
