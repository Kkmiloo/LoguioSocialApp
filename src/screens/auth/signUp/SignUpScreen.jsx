/* global require */
import React, { useState } from 'react';
import { TextInput, View, Pressable, Text, Image } from 'react-native';
import useAuth from '../../../hooks/useAuthAction';
import { styles } from './SignUp.styles';
import RoleSignUp from './RoleSignUp';
import { useNavigation } from '@react-navigation/native';

function SignUpScreen() {
  const { signUp } = useAuth();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    signUp({ email, password });
    navigation.navigate('RoleSignUp');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../assets/images/loguio.png')} />
      <Text style={{ fontSize: 24, marginBottom: 24 }}> Registro </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        textContentType="password"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        textContentType="password"
      />
      <Pressable style={styles.button} onPress={handleSignUp}>
        <Text style={styles.textButton}> Registrarme </Text>
      </Pressable>

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ color: '#9D9FA0', fontSize: 18 }}> ¿Ya tienes cuenta? </Text>
        <Pressable>
          <Text
            style={{ color: '#0082CD', fontSize: 18 }}
            onPress={() => navigation.navigate('login')}
          >
            Inicia Sesión
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default SignUpScreen;
