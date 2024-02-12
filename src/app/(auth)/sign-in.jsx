/* global require */
import React, { useState } from 'react';
import { TextInput, View, Pressable, Text, Image } from 'react-native';

import { styles } from '../../styles/Login.styles';

import { useSession } from '../../context/ctx';
import { router } from 'expo-router';
import AppTextInput from '../../components/inputs/AppTextInput';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, error, clearError, isLoading } = useSession();

  const handleLogin = async () => {
    try {
      await signIn(email, password);
      router.replace('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/images/loguio.png')} />

      <AppTextInput placeholder="Email" value={email} onChangeText={setEmail} />

      <AppTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        type={'password'}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      {isLoading && <Text>Loading...</Text>}
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.textButton}> Iniciar sesión </Text>
      </Pressable>
      <Pressable>
        <Text style={{ color: '#0082CD', fontSize: 18 }}> Olvidé mi contraseña </Text>
      </Pressable>

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ color: '#9D9FA0', fontSize: 18 }}> ¿No tienes cuenta? </Text>
        <Pressable
          onPress={() => {
            router.push('/sign-up');
            clearError();
          }}
        >
          <Text style={{ color: '#0082CD', fontSize: 18 }}>Regístrate</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default SignIn;
