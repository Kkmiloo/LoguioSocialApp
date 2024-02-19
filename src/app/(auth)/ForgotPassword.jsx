import { View, Text } from 'react-native';
import React, { useState } from 'react';
import AppTextInput from '../../components/inputs/AppTextInput';
import SubmitButton from '../../components/buttons/SubmitButton';
import { passwordReset } from '../../firebase/functions/firebaseAuth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState(false);

  const handleSubmit = async () => {
    try {
      await passwordReset(email);
      setEmailMessage(true);
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert('User not found, try again!');
        setEmail('');
      }
    }
  };
  return (
    <View
      style={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        paddingTop: 100,
      }}
    >
      {emailMessage ? (
        <Text>El email se ha enviado</Text>
      ) : (
        <AppTextInput placeholder="Email" value={email} onChangeText={setEmail} />
      )}

      <SubmitButton title="Recuperar Contraseña" onPress={handleSubmit} />
    </View>
  );
};

export default ForgotPassword;
