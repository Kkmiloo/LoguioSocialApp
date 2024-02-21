import React, { useState } from 'react';
import { View, Pressable, Text, KeyboardAvoidingView } from 'react-native';
import { styles } from '../../styles/SignUp.styles';
import { router } from 'expo-router';
import { useSession } from '../../context/AuthContext';
import { ScrollView } from 'react-native-gesture-handler';
import LoadingModal from '../../components/modal/LoadingModal';
import AppTextInput from '../../components/inputs/AppTextInput';
import SubmitButton from '../../components/buttons/SubmitButton';
import AppLogo from '../../components/images/AppLogo';
import LinkButton from '../../components/buttons/LinkButton';
import ErrorMessage from '../../components/errors/ErrorMessage';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { signUp, error, isLoading, setError } = useSession();

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword) {
      return setError('Todos los campos son requeridos');
    }
    if (password !== confirmPassword) {
      return setError('Las contraseñas no coinciden');
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
        {isLoading && <LoadingModal visible={isLoading} />}
        <View style={styles.container}>
          <AppLogo />

          <Text style={{ fontSize: 24, marginBottom: 24 }}> Registro </Text>
          <AppTextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppTextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            textContentType="password"
          />
          <AppTextInput
            placeholder="Confirmar Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            textContentType="password"
          />
          {error && <ErrorMessage error={error} />}

          <SubmitButton onPress={handleSignUp} title="Registrarme" />
          <Text style={{ color: '#9D9FA0', fontSize: 18, marginTop: 20 }}>
            Al registrarte aceptas nuestros Términos y Condiciones
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Text style={{ color: '#9D9FA0', fontSize: 18 }}> ¿Ya tienes cuenta? </Text>
            <LinkButton onPress={() => router.replace('/sign-in')} value={'Inicia Sesión'} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignUp;
