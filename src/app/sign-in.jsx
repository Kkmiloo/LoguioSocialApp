/* global require */
import React, { useState } from 'react';
import { TextInput, View, Pressable, Text, Image } from 'react-native';

import { styles } from './Login.styles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config/firebaseConfig';
import { useSession } from '../context/ctx';
import { router } from 'expo-router';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useSession();

  const handleLogin = async () => {
    try {
      console.log(email, password);
      const { user } = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {/*   <Image style={styles.logo} source={require('../../../assets/images/loguio.png')} /> */}
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {/*  {error && <Text style={{ color: 'red' }}>{error}</Text>} */}
      <Pressable
        style={styles.button}
        onPress={() => {
          signIn();
          router.replace('/');
        }}
      >
        <Text style={styles.textButton}> Iniciar sesión </Text>
      </Pressable>
      <Pressable>
        <Text style={{ color: '#0082CD', fontSize: 18 }}> Olvidé mi contraseña </Text>
      </Pressable>

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ color: '#9D9FA0', fontSize: 18 }}> ¿No tienes cuenta? </Text>
        <Pressable>
          <Text style={{ color: '#0082CD', fontSize: 18 }}>Regístrate</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default SignIn;
