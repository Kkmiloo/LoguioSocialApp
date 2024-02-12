/* global require */
import React, { useState } from 'react';
import { TextInput, View, Pressable, Text, Image, KeyboardAvoidingView } from 'react-native';
import { styles } from '../../styles/SignUp.styles';
import { router } from 'expo-router';
import { useSession } from '../../context/ctx';
import { ScrollView } from 'react-native-gesture-handler';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { signUp, error } = useSession();

  console.log('SignUp');

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword) {
      alert('Todos los campos son requeridos');
      return;
    }
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      await signUp(email, password);
      router.push('/role-sign-up');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../../assets/images/loguio.png')} />

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
          {error && <Text style={{ color: 'red' }}>{error}</Text>}
          <Pressable style={styles.button} onPress={handleSignUp}>
            <Text style={styles.textButton}> Registrarme </Text>
          </Pressable>

          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Text style={{ color: '#9D9FA0', fontSize: 18 }}> ¿Ya tienes cuenta? </Text>
            <Pressable onPress={() => router.replace('/sign-in')}>
              <Text style={{ color: '#0082CD', fontSize: 18 }}>Inicia Sesión</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignUp;
