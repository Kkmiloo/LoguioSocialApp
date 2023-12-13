import { View, Text } from 'react-native';
import React, { useState } from 'react';
import RadioBtn from '../../../components/buttons/RadioBtn';

const RoleSignUp = () => {
  const [value, setValue] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <Text>RoleSignUp</Text>

      {<Text>{value}</Text>}
      <RadioBtn label="Cliente" value="client" onValueChange={setValue} />
      <RadioBtn label="Visitante" value="visitante" onValueChange={setValue} />
    </View>
  );
};

export default RoleSignUp;
