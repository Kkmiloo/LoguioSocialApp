import { Text, Pressable } from 'react-native';
import React from 'react';
import { styles } from '../../styles/Login.styles';

const SubmitButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}> {title}</Text>
    </Pressable>
  );
};

export default SubmitButton;
