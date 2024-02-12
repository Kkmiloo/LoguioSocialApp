import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSession } from '../../context/ctx';

const index = () => {
  const { signOut, session } = useSession();

  console.log('session app', session);
  return (
    <SafeAreaView>
      <Text>index 2</Text>

      <Pressable onPress={() => signOut()}>
        <Text>hola </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default index;
