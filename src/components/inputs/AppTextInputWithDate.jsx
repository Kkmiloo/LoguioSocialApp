import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import AppDatePicker from '../buttons/AppDatePicker';

const AppTextInputWithDate = ({ placeholder, value, onChangeText }) => {
  const [text, setText] = useState(value.toLocaleDateString('en-GB') || '');

  useEffect(() => {
    setText(value.toLocaleDateString('en-GB'));
  }, [value]);
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={text}
        keyboardType="numeric"
      />

      <AppDatePicker style={styles.btn} date={value} setDate={onChangeText} />
    </>
  );
};

export default AppTextInputWithDate;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 56,
    borderColor: 'gray',
    marginBottom: 12,
    paddingHorizontal: 8,
    paddingLeft: 16,
    position: 'relative',
    borderRadius: 8,
    backgroundColor: '#F6F7FA',
    fontFamily: 'Dhyana',
    fontSize: 16,
  },
  btn: {
    position: 'absolute',
  },
});
