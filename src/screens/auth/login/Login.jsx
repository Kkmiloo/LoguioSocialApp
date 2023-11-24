/* global require */
import React, { useState } from 'react';
import { TextInput, View, Pressable, Text, Image } from 'react-native';
import useAuth from '../../../hooks/useAuthAction';
import { styles } from './Login.styles';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const handleLogin = () => {
    signIn({ email, password });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../assets/images/loguio.png')} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.textButton}> Iniciar sesión </Text>
      </Pressable>

      <Pressable>
        <Text style={{ color: '#0082CD', fontSize: 18 }}> Olvidé mi contraseña </Text>
      </Pressable>
    </View>
  );
}

export default LoginScreen;
