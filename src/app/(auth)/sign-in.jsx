/* global require */
import React, { useState } from 'react';
import { View, Pressable, Text, Image } from 'react-native';
import { useSession } from '../../context/AuthContext';
import { router } from 'expo-router';
import AppTextInput from '../../components/inputs/AppTextInput';
import SubmitButton from '../../components/buttons/SubmitButton';
import ErrorMessage from '../../components/errors/ErrorMessage';
import LinkButton from '../../components/buttons/LinkButton';
import LoadingModal from '../../components/modal/LoadingModal';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, error, clearError, isLoading } = useSession();

  const handleLogin = async () => {
    try {
      clearError();
      await signIn(email, password);
      router.replace('/');
    } catch (e) {
      console.log(e);
    }
  };

  const handleForgotPassword = () => {
    router.push('/ForgotPassword');
  };

  const handleSingUp = () => {
    clearError();
    router.push('/sign-up');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
      }}
    >
      <Image
        style={{ marginTop: 48, width: 200, height: 140, resizeMode: 'contain', marginBottom: 24 }}
        source={require('../../assets/images/loguio.png')}
      />
      <AppTextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <AppTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        type={'password'}
      />
      {error && <ErrorMessage error={error} />}
      {isLoading && <LoadingModal visible={isLoading} />}
      <SubmitButton onPress={handleLogin} title="Iniciar sesión" />

      <LinkButton onPress={handleForgotPassword} value="Olvidé mi contraseña" />

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ color: '#9D9FA0', fontSize: 18 }}> ¿No tienes cuenta? </Text>
        <LinkButton onPress={handleSingUp} value="Regístrate" />
      </View>
    </View>
  );
}

export default SignIn;
