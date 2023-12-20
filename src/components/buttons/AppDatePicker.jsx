import React, { useState } from 'react';
import { Button, View, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AppDatePicker = ({ setDate, date, style }) => {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <>
      <Button style={{ ...style }} onPress={showDatepicker} title="Show date picker!" />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </>
  );
};

export default AppDatePicker;
