import { Pressable, Text, TextInput } from 'react-native';
import React, { forwardRef, memo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';

const AppTextInput = (
  { children, placeholder, value, onChangeText, type, setDate, editable, refV },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      ref={refV}
      style={isFocused ? [styles.input, styles.focused] : styles.input}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholder={placeholder}
      value={value}
      secureTextEntry={type === 'password'}
      onChangeText={onChangeText}
      editable={editable}
      autoCapitalize="none"
    />
  );
};

export default AppTextInput;

export const styles = StyleSheet.create({
  focused: {
    borderColor: COLORS.secondary,
    borderWidth: 2,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    height: 56,
    borderColor: 'gray',
    marginBottom: 12,
    paddingHorizontal: 8,
    paddingLeft: 16,
    borderRadius: 8,
    backgroundColor: '#F6F7FA',
    fontFamily: 'Dhyana',
    fontSize: 16,
  },
  button: {
    width: '90%',
    height: 56,
    borderColor: 'gray',
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginTop: 24,
    backgroundColor: '#EC5F5F',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#f1abab',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0,
    shadowRadius: 6.65,
    elevation: 11,
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Dhyana',
    fontWeight: '400',
  },

  shadowContainer: {
    shadowColor: '#F1ABAB',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  logo: {
    marginTop: 48,
    width: 200,
    height: 140,
    resizeMode: 'contain',
    marginBottom: 24,
  },
});
