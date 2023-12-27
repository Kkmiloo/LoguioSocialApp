import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import useAuth from '../hooks/useAuthAction';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { handleAuthStateChanged } from '../redux/auth/authSlice';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const { logout } = useAuth();
  const { user } = useAppSelector((state) => state.auth);

  const navigation = useNavigation();
  useEffect(() => {
    if (user && !user.profileCompleted) {
      navigation.navigate('RoleSignUp');
    }
  }, [user, navigation]);
  const handleLogout = () => {
    logout();
  };
  return (
    <View>
      <Text>Welcome to the Home Screen! {user.email} </Text>
      <Button title="LogOut" onPress={handleLogout} />
    </View>
  );
}

export default HomeScreen;
