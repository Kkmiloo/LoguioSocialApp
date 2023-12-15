import { View, Text, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import RadioBtn from '../../../components/buttons/RadioBtn';
import { styles } from './SignUp.styles';
import loguioLogo from '../../../assets/images/loguio.png';
import { useNavigation } from '@react-navigation/native';
function RoleSignUp() {
  const [value, setValue] = useState('');

  const navigation = useNavigation();
  const data = ['Turista', 'Guia', 'Interprete'];

  const handleContinue = () => {
    if (!value) return;
    navigation.navigate('DataSignUp', { role: value });
  };
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={loguioLogo} />
      <Text style={{ fontSize: 24, marginBottom: 24 }}> Define tu rol </Text>

      {data.map((item) => (
        <RadioBtn
          key={item}
          label={item}
          value={item}
          onValueChange={setValue}
          selectedValue={value}
        />
      ))}

      <Pressable style={styles.button} onPress={handleContinue}>
        <Text style={styles.textButton}> Continuar </Text>
      </Pressable>
    </View>
  );
}

export default RoleSignUp;
