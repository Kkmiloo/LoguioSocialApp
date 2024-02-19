import { View, Text, Image, Pressable, ScrollView, Platform } from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from '../../styles/SignUp.styles';
import AppTextInput from '../../components/inputs/AppTextInput';
import BoxSelectorInput from '../../components/inputs/BoxSelectorInput';
import countries from '../../utils/countries.json';
import AppTextInputDropDown from '../../components/inputs/AppTextInputDropDown';
import { router, useLocalSearchParams } from 'expo-router';
import { useSession } from '../../context/AuthContext';
import DateTimePickerAndroid from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAvoidingView } from 'react-native';
import loguioLogo from '../../assets/images/loguio.png';

function DataSignUp() {
  const name = useRef();
  const lastName = useRef();
  const phone = useRef();
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [actividad, setActividad] = useState('');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const { session, completeProfile, error } = useSession();
  const userUid = JSON.parse(session).uid;
  const params = useLocalSearchParams();
  const { userRole } = params;

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

  const onChange = ({ type }, selectedDate) => {
    if (type === 'dismissed') return showPicker(false);

    const currentDate = selectedDate;
    setShowPicker(false);
    setDateOfBirth(currentDate.toDateString());
    setDate(currentDate);
    if (Platform.OS === 'android') {
      setShowPicker(false);
    }
  };

  const handleCompleteProfile = async () => {
    if (!name || !lastName || !phone || !date || !selectedCountry) {
      alert('Todos los campos son obligatorios');
      return;
    }

    await completeProfile(userUid, {
      name: name.text,
      lastName: lastName.text,
      phone: phone.text,
      date,
      selectedCountry,
      userRole,
      activities: checkboxes,
    });
    router.replace('/');
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.logo} source={loguioLogo} />
        <Text style={{ fontSize: 24, marginBottom: 24 }}> {userRole}</Text>
        <AppTextInput
          placeholder={'Nombre'}
          innerRef={name}
          onChangeText={(text) => (name.text = text)}
        />
        <AppTextInput
          placeholder={'Apellidos'}
          innerRef={lastName}
          onChangeText={(text) => (lastName.text = text)}
        />
        <AppTextInputDropDown
          options={countries.countries}
          value={selectedCountry}
          setValue={setSelectedCountry}
        />

        {showPicker && <DateTimePickerAndroid value={date} mode="date" onChange={onChange} />}
        <Pressable style={styles.input} onPress={() => setShowPicker(true)}>
          <View pointerEvents="none">
            <TextInput
              style={{ ...styles.input, paddingLeft: 0 }}
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
              placeholder="Fecha de Nacimiento"
            />
          </View>
        </Pressable>
        <AppTextInput
          style={styles.input}
          placeholder={'telefono'}
          innerRef={phone}
          onChangeText={(text) => (phone.text = text)}
        />
        {userRole === 'Guía' && (
          <>
            <AppTextInput
              placeholder="Permiso del guia"
              value={actividad}
              onChangeText={setActividad}
            />
          </>
        )}

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

        {userRole === 'Guía' && (
          <>
            <Text style={{ fontSize: 18, marginBottom: 24, marginTop: 24 }}>
              Actividad principal
            </Text>
            <AppTextInput
              placeholder="Actividad Principal"
              value={actividad}
              onChangeText={setActividad}
            />
          </>
        )}
        <Pressable style={styles.button} onPress={handleCompleteProfile}>
          <Text style={styles.textButton}> Continuar </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default DataSignUp;
