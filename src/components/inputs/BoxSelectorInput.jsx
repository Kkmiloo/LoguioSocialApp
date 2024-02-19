import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CheckBox from 'expo-checkbox';
function BoxSelectorInput({ isChecked, onValueChange, label, style }) {
  return (
    <View style={(styles.checkboxContainer, { ...style })}>
      <CheckBox value={isChecked} onValueChange={onValueChange} style={styles.checkbox} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default BoxSelectorInput;
