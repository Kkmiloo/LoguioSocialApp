import { View, Pressable, Platform } from 'react-native';
import React, { useState } from 'react';
import DateTimePickerAndroid from '@react-native-community/datetimepicker';

import AppTextInput from './AppTextInput';
import { useTheme } from '../../context/ThemeContext';
import { StyleSheet } from 'react-native';

const AppDatePicker = ({ textDate, setTextDate, minAge }) => {
  const theme = useTheme();
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const onChange = ({ type }, selectedDate) => {
    if (type === 'dismissed') return setShowPicker(false);

    if (type === 'set') {
      const currentDate = selectedDate;
      setShowPicker(false);
      setTextDate(currentDate.toDateString());
      setDate(currentDate);

      console.log('date', date);
      console.log('textDate', textDate);
      if (Platform.OS === 'android') {
        setShowPicker(false);
      }
    }
  };

  const todayDate = new Date();
  const minimumDateRegister = todayDate.setFullYear(todayDate.getFullYear() - minAge);

  return (
    <Pressable style={{ width: '100%' }} onPress={() => setShowPicker(true)}>
      {showPicker && (
        <DateTimePickerAndroid
          value={date}
          mode="date"
          onChange={onChange}
          maximumDate={new Date(minimumDateRegister)}
        />
      )}
      <View pointerEvents="none">
        <AppTextInput
          value={textDate}
          onChangeText={setTextDate}
          placeholder="Fecha de Nacimiento"
        />
      </View>
    </Pressable>
  );
};

export default AppDatePicker;
