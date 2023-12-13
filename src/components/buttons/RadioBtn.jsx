import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  selected: {
    backgroundColor: '#000',
  },
  label: {
    fontSize: 16,
  },
});

const RadioBtn = ({ label, value, selectedValue, onValueChange }) => {
  const isSelected = value === selectedValue;

  return (
    <TouchableOpacity style={styles.container} onPress={() => onValueChange(value)}>
      <View style={[styles.circle, isSelected && styles.selected]} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

RadioBtn.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  selectedValue: PropTypes.any.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default RadioBtn;
