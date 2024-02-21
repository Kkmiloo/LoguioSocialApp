import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSession } from '../../context/AuthContext';
import SubmitButton from '../../components/buttons/SubmitButton';

const Index = () => {
  const { signOut, session } = useSession();
  // const { user } = JSON.parse(session);

  return (
    <SafeAreaView>
      <Text> User Data: </Text>
      <Text>{session}</Text>

      <SubmitButton
        title="Sign Out"
        onPress={() => signOut()}
        customStyle={{ backgroundColor: 'red' }}
      />
    </SafeAreaView>
  );
};

export default Index;
