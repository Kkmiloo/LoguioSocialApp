import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSession } from '../../context/AuthContext';

const index = () => {
  const { signOut, session } = useSession();
  const { user } = JSON.parse(session);

  console.log('session app', session);
  return (
    <SafeAreaView>
      <Text>{session}</Text>

      <Pressable onPress={() => signOut()}>
        <Text>hola</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default index;
