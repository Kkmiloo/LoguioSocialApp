/* global require */
import React, { useState } from 'react';
import { TextInput, View, Pressable, Text, Image } from 'react-native';
import useAuth from '../../../hooks/useAuthAction';
import { styles } from './SignUp.styles';

function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp } = useAuth();

  const handleSignUp = () => {
    signUp({ email, password });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../assets/images/loguio.png')} />
      <Text> registro </Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
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
            {' '}
            Inicia Sesión{' '}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default SignUpScreen;
