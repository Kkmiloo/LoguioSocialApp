import { View, Text, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import RadioBtn from '../../../components/buttons/RadioBtn';
import { styles } from './SignUp.styles';
import loguioLogo from '../../../assets/images/loguio.png';
import guide from '../../../assets/images/guide.png';
import interpreter from '../../../assets/images/interpreter.png';
import tourist from '../../../assets/images/tourist.png';
import { useNavigation } from '@react-navigation/native';
function RoleSignUp() {
  const [value, setValue] = useState('');

  const navigation = useNavigation();
  const data = [
    { role: 'Turista', img: tourist },
    { role: 'Guía', img: guide },
    { role: 'Interprete', img: interpreter },
  ];

  const handleContinue = () => {
    if (!value) return;
    navigation.navigate('DataSignUp', { role: value });
  };
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={loguioLogo} />
      <Text style={{ fontSize: 24, marginBottom: 24 }}> Define tu rol </Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
        }}
      >
        {data.map((item) => (
          <View key={item.role} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Image style={{ marginBottom: 7 }} source={item.img} />

            <RadioBtn
              label={item.role}
              value={item.role}
              onValueChange={setValue}
              selectedValue={value}
            />
          </View>
        ))}
      </View>

      <Pressable style={styles.button} onPress={handleContinue}>
        <Text style={styles.textButton}> Continuar </Text>
      </Pressable>
    </View>
  );
}

export default RoleSignUp;
