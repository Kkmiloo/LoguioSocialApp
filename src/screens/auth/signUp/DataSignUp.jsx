import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import loguioLogo from '../../../assets/images/loguio.png';
import { styles } from './SignUp.styles';
import AppTextInput from '../../../components/inputs/AppTextInput';
import BoxSelectorInput from '../../../components/buttons/BoxSelectorInput';
import { useRoute } from '@react-navigation/native';
import countries from '../../../utils/countries.json';
import AppTextInputDropDown from '../../../components/inputs/AppTextInputDropDown';

function DataSignUp() {
  const route = useRoute();
  const role = route.params.role;
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

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
      {/* <Image style={styles.logo} source={loguioLogo} /> */}
      <Text style={{ fontSize: 24, marginBottom: 24 }}> {role}</Text>
      <AppTextInput placeholder={'Nombre'} value={name} onChangeText={setName} />
      <AppTextInput placeholder={'Apellidos'} value={lastName} onChangeText={setLastName} />
      <AppTextInputDropDown
        options={countries.countries}
        value={selectedCountry}
        setValue={setSelectedCountry}
      />
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
        {console.log([name, lastName, selectedCountry, date, phone, checkboxes])}
        <Text style={styles.textButton}> Continuar </Text>
      </Pressable>
    </ScrollView>
  );
}

export default DataSignUp;
