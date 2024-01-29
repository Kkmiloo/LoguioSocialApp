/* global require */
import React, { useState } from 'react';
import { TextInput, View, Pressable, Text, Image } from 'react-native';

import { styles } from './Login.styles';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <Pressable style={styles.button}>
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

export default LoginScreen;
