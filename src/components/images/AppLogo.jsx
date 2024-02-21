import { Image } from 'react-native';
import Logo from '../../assets/images/loguio.png';
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const AppLogo = () => {
  const theme = useTheme();
  return (
    <Image
      style={{
        marginVertical: theme.spacing.xl,
        width: 200,
        height: 140,
        resizeMode: 'contain',
      }}
      source={Logo}
    />
  );
};

export default AppLogo;
