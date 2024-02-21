import { View, Text, ScrollView } from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from '../../styles/SignUp.styles';
import AppTextInput from '../../components/inputs/AppTextInput';
import BoxSelectorInput from '../../components/inputs/BoxSelectorInput';
import countries from '../../utils/countries.json';
import AppTextInputDropDown from '../../components/inputs/AppTextInputDropDown';
import { router, useLocalSearchParams } from 'expo-router';
import { useSession } from '../../context/AuthContext';
import { KeyboardAvoidingView } from 'react-native';
/* import AppLogo from '../../components/images/AppLogo'; */
import AppDatePicker from '../../components/inputs/AppDatePicker';
import SubmitButton from '../../components/buttons/SubmitButton';
import useCheckbox from '../../hooks/useCheckboxes';
import ErrorMessage from '../../components/errors/ErrorMessage';

function DataSignUp() {
  const name = useRef();
  const lastName = useRef();
  const phone = useRef();
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [guideActivity, setGuideActivity] = useState('');
  const [guidePermission, setGuidePermission] = useState('');

  const { session, completeProfile, setError, error } = useSession();
  const userUid = JSON.parse(session).uid;
  const params = useLocalSearchParams();
  const { userRole } = params;
  const touristActivitiesData = [
    'actividad 1',
    'actividad 2',
    'actividad 3',
    'actividad 4',
    'actividad 5',
  ];
  const [activitiesTourist, handleValueActivitiesTourist] = useCheckbox(touristActivitiesData);

  const languages = ['Español', 'Inglés', 'Portugués', 'Francés', 'Italiano', 'Alemán'];

  const [checkboxLanguages, handleValueLanguages] = useCheckbox(languages);

  const listOfActivitiesGuide = ['actividad 1', 'actividad 2', 'actividad 3', 'actividad 4'];

  const [guideActivities, handleValueGuideActivities] = useCheckbox(listOfActivitiesGuide);

  const handleCompleteProfile = async () => {
    if (!name || !lastName || !phone || !dateOfBirth || !selectedCountry) {
      return setError('Todos los campos son obligatorios');
    }

    if (userRole === 'Guía') {
      if (!guideActivity || !guidePermission) {
        return alert('Todos los campos son obligatorios');
      }
    }

    const info = {
      userRole,
      name: name.text,
      lastName: lastName.text,
      phone: phone.text,
      dateOfBirth,
      selectedCountry,
    };

    if (userRole === 'Guía') {
      info.guideActivity = guideActivity;
      info.guidePermission = guidePermission;
      info.guideActivities = guideActivities;
      info.languages = checkboxLanguages;
    }

    if (userRole === 'Turista') {
      info.activitiesTourist = activitiesTourist;
    }
    if (userRole === 'Interprete') {
      info.languages = checkboxLanguages;
    }
    await completeProfile(userUid, { ...info });
    router.replace('/');
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* <AppLogo /> */}
        <Text style={{ fontSize: 24, marginBottom: 24 }}> {userRole}</Text>
        <AppTextInput
          inputMode={'text'}
          placeholder={'Nombre'}
          innerRef={name}
          onChangeText={(text) => (name.text = text)}
        />
        <AppTextInput
          placeholder={'Apellidos'}
          innerRef={lastName}
          onChangeText={(text) => (lastName.text = text)}
        />
        <AppTextInputDropDown
          placeholder={'País'}
          options={countries.countries}
          value={selectedCountry}
          setValue={setSelectedCountry}
        />

        <AppDatePicker
          textDate={dateOfBirth}
          setTextDate={(text) => setDateOfBirth(text)}
          minAge={18}
        />
        <AppTextInput
          inputMode={'numeric'}
          placeholder={'teléfono'}
          innerRef={phone}
          onChangeText={(text) => (phone.text = text)}
        />

        {userRole === 'Turista' && (
          <TouristForm
            checkboxes={activitiesTourist}
            handleValueChange={handleValueActivitiesTourist}
          />
        )}

        {userRole === 'Guía' && (
          <GuideForm
            activity={guideActivity}
            setActivity={setGuideActivity}
            guidePermission={guidePermission}
            setGuidePermission={setGuidePermission}
            languages={checkboxLanguages}
            setLanguages={handleValueLanguages}
            guideActivities={guideActivities}
            setGuideActivities={handleValueGuideActivities}
          />
        )}

        {userRole === 'Interprete' && (
          <InterpreterForm languages={checkboxLanguages} setLanguages={handleValueLanguages} />
        )}

        {error && <ErrorMessage error={error} />}
        <SubmitButton title={'Continuar'} onPress={handleCompleteProfile} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default DataSignUp;

const InterpreterForm = ({ languages, setLanguages }) => {
  return (
    <>
      <Text style={{ fontSize: 18, marginBottom: 24, marginTop: 24 }}>
        Lista de Idiomas que domina
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {Object.keys(languages).map((item) => (
          <BoxSelectorInput
            style={{ width: '50%', display: 'flex', flexDirection: 'row' }}
            key={item}
            label={item}
            isChecked={languages[item]}
            onValueChange={() => setLanguages(item)}
          />
        ))}
      </View>
    </>
  );
};

const GuideForm = ({
  activity,
  setActivity,
  guidePermission,
  setGuidePermission,
  languages,
  setLanguages,
  guideActivities,
  setGuideActivities,
}) => {
  return (
    <>
      <AppTextInput
        placeholder={'Permiso de guía'}
        value={guidePermission}
        onChangeText={setGuidePermission}
      />
      <Text style={{ fontSize: 18, marginBottom: 24, marginTop: 24 }}>
        Lista de Idiomas que domina
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {Object.keys(languages).map((item) => (
          <BoxSelectorInput
            style={{ width: '50%', display: 'flex', flexDirection: 'row' }}
            key={item}
            label={item}
            isChecked={languages[item]}
            onValueChange={() => setLanguages(item)}
          />
        ))}
      </View>
      <Text style={{ fontSize: 18, marginBottom: 24, marginTop: 24 }}>Actividad principal</Text>
      <AppTextInput placeholder="Actividad Principal" value={activity} onChangeText={setActivity} />
      <Text style={{ fontSize: 18, marginBottom: 24, marginTop: 24 }}>
        Lista de actividades que desarrolla como guía
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {Object.keys(guideActivities).map((item) => (
          <BoxSelectorInput
            style={{ width: '50%', display: 'flex', flexDirection: 'row' }}
            key={item}
            label={item}
            isChecked={guideActivities[item]}
            onValueChange={() => setGuideActivities(item)}
          />
        ))}
      </View>
    </>
  );
};

const TouristForm = ({ checkboxes, handleValueChange }) => {
  return (
    <>
      <Text style={{ fontSize: 18, marginBottom: 24 }}> añade tus actividades preferidas </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {Object.keys(checkboxes).map((item) => (
          <BoxSelectorInput
            style={{ width: '50%', display: 'flex', flexDirection: 'row' }}
            key={item}
            label={item}
            isChecked={checkboxes[item]}
            onValueChange={() => handleValueChange(item)}
          />
        ))}
      </View>
    </>
  );
};
