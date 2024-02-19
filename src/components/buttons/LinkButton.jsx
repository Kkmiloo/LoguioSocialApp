import { Text, Pressable } from 'react-native';
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const LinkButton = ({ onPress, value }) => {
  const theme = useTheme();
  return (
    <Pressable onPress={onPress}>
      <Text style={{ color: theme.color.link, ...theme.textVariants.link }}> {value}</Text>
    </Pressable>
  );
};

export default LinkButton;
