import { Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ErrorMessage = ({ error }) => {
  const theme = useTheme();

  console.log(theme);
  return (
    <View
      style={{
        backgroundColor: '#FCD4D9',
        padding: theme.spacing.s,
        borderRadius: 5,
        marginBottom: theme.spacing.s,
        borderColor: '#FDBFC8',
        borderWidth: 1,
        width: '100%',
      }}
    >
      <Text style={{ color: theme.color.error, textAlign: 'center' }}>{error}</Text>
    </View>
  );
};

export default ErrorMessage;
