import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CheckBox from 'expo-checkbox';
function CheckboxInput({ isChecked, onValueChange, label }) {
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox value={isChecked} onValueChange={onValueChange} style={styles.checkbox} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default CheckboxInput;
