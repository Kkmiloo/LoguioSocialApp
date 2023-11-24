import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import useAuth from '../hooks/useAuthAction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, signUp } = useAuth();

  const handleLogin = () => {
    signIn({ email, password });
  };

  const handleCreate = () => {
    signUp({ email, password });
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Create" onPress={handleCreate} />
    </View>
  );
}

export default LoginScreen;
