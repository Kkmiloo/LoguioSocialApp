import { View, Text, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import loguioLogo from '../../../assets/images/loguio.png';
import { styles } from './SignUp.styles';
import AppTextInput from '../../../components/inputs/AppTextInput';
import CheckboxInput from '../../../components/buttons/BoxSelectorInput';

function DataSignUp() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');

  const data = ['actividad 1', 'actividad 2', 'actividad 3', 'actividad 4'];

  const initialCheckboxState = data.reduce((acc, curr) => ({ ...acc, [curr]: false }), {});
  const [checkboxes, setCheckboxes] = useState(initialCheckboxState);
  const handleValueChange = (item) => {
    setCheckboxes((prev) => ({ ...prev, [item]: !prev[item] }));
  };
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={loguioLogo} />
      <Text style={{ fontSize: 24, marginBottom: 24 }}> Define tu rol </Text>
      <AppTextInput placeholder={'Nombre'} value={name} onChangeText={setName} />
      <AppTextInput placeholder={'Apellidos'} value={lastName} onChangeText={setLastName} />
      <AppTextInput
        placeholder={'fecha nacimiento'}
        value={birthDate}
        onChangeText={setBirthDate}
      />
      <AppTextInput placeholder={'telefono'} value={phone} onChangeText={setPhone} />

      {data.map((item) => (
        <CheckboxInput
          key={item}
          label={item}
          isChecked={checkboxes[item]}
          onValueChange={() => handleValueChange(item)}
        />
      ))}
      <Text style={{ fontSize: 18, marginBottom: 24 }}> añade tus actividades preferidas </Text>
      <Pressable style={styles.button}>
        <Text style={styles.textButton}> Continuar </Text>
      </Pressable>
    </View>
  );
}

export default DataSignUp;
