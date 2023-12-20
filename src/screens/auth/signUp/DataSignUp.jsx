import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import loguioLogo from '../../../assets/images/loguio.png';
import { styles } from './SignUp.styles';
import AppTextInput from '../../../components/inputs/AppTextInput';
import BoxSelectorInput from '../../../components/buttons/BoxSelectorInput';

function DataSignUp() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  const data = [
    'actividad 1',
    'actividad 2',
    'actividad 3',
    'actividad 4',
    'actividad 5',
    'actividad 6',
  ];

  const initialCheckboxState = data.reduce((acc, curr) => ({ ...acc, [curr]: false }), {});
  const [checkboxes, setCheckboxes] = useState(initialCheckboxState);
  const handleValueChange = (item) => {
    setCheckboxes((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.logo} source={loguioLogo} />
      <Text style={{ fontSize: 24, marginBottom: 24 }}> Define tu rol </Text>
      <AppTextInput placeholder={'Nombre'} value={name} onChangeText={setName} />
      <AppTextInput placeholder={'Apellidos'} value={lastName} onChangeText={setLastName} />

      <AppTextInput placeholder={'Fecha de nacimiento'} value={date} onChangeText={setDate} />
      <AppTextInput placeholder={'telefono'} value={phone} onChangeText={setPhone} />
      <Text style={{ fontSize: 18, marginBottom: 24 }}> añade tus actividades preferidas </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {data.map((item) => (
          <BoxSelectorInput
            style={{ width: '50%', display: 'flex', flexDirection: 'row' }}
            key={item}
            label={item}
            isChecked={checkboxes[item]}
            onValueChange={() => handleValueChange(item)}
          />
        ))}
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.textButton}> Continuar </Text>
      </Pressable>
    </ScrollView>
  );
}

export default DataSignUp;
