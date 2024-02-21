import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import RadioBtn from '../../components/buttons/RadioBtn';
import { styles } from '../../styles/SignUp.styles';

import guide from '../../assets/images/guide.png';
import interpreter from '../../assets/images/interpreter.png';
import tourist from '../../assets/images/tourist.png';
import { router } from 'expo-router';
import { useSession } from '../../context/AuthContext';
import SubmitButton from '../../components/buttons/SubmitButton';
import AppLogo from '../../components/images/AppLogo';

function RoleSignUp() {
  const [userRole, setUserRole] = useState('');
  const { signOut } = useSession();

  const data = [
    { role: 'Turista', img: tourist },
    { role: 'Guía', img: guide },
    { role: 'Interprete', img: interpreter },
  ];

  const handleContinue = () => {
    if (!userRole) return;

    router.push({ pathname: '/data-sign-up', params: { userRole } });
  };

  return (
    <View style={styles.container}>
      <AppLogo />
      <Text style={{ fontSize: 24, marginBottom: 24 }}> Define tu rol </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
        }}
      >
        {data.map((item) => (
          <View key={item.role} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Image style={{ marginBottom: 7 }} source={item.img} />
            <RadioBtn
              label={item.role}
              value={item.role}
              onValueChange={setUserRole}
              selectedValue={userRole}
            />
          </View>
        ))}
      </View>

      <SubmitButton
        title={'Salir'}
        onPress={() => {
          signOut();
          router.replace('/');
        }}
      />

      <SubmitButton title="Continuar" onPress={handleContinue} />
    </View>
  );
}

export default RoleSignUp;
