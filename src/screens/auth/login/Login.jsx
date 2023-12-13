/* global require */
import React, { useState } from 'react';
import { TextInput, View, Pressable, Text, Image } from 'react-native';
import useAuth from '../../../hooks/useAuthAction';
import { styles } from './Login.styles';
import { useAppSelector } from '../../../hooks/store';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error } = useAppSelector((state) => state.auth);

  const { signIn } = useAuth();

  const handleLogin = () => {
    if (!email || !password) {
      alert('Todos los campos son obligatorios');
      return;
    }
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
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.textButton}> Iniciar sesión </Text>
      </Pressable>
      <Pressable>
        <Text style={{ color: '#0082CD', fontSize: 18 }}> Olvidé mi contraseña </Text>
      </Pressable>

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ color: '#9D9FA0', fontSize: 18 }}> ¿No tienes cuenta? </Text>
        <Pressable>
          <Text
            style={{ color: '#0082CD', fontSize: 18 }}
            onPress={() => navigation.navigate('signUp')}
          >
            Regístrate
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default LoginScreen;
