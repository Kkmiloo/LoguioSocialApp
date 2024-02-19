import { TextInput } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

const AppTextInput = ({
  children,
  placeholder,
  value,
  onChangeText,
  type,
  setDate,
  editable,
  innerRef,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const theme = useTheme();

  const styles = StyleSheet.create({
    focused: {
      borderColor: theme.color.secondary,
      borderWidth: 2,
    },
    input: {
      width: '100%',
      height: theme.spacing.xxl,
      borderWidth: 1,
      borderColor: theme.color.background,
      marginBottom: 12,
      paddingHorizontal: theme.spacing.s,
      paddingLeft: theme.spacing.m,
      borderRadius: theme.spacing.s,
      backgroundColor: '#F6F7FA',
      ...theme.textVariants.placeholder,
    },
  });

  return (
    <TextInput
      ref={innerRef}
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
