import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { COLORS } from '../../styles/theme';

const AppTextInputDropDown = ({ options, value, setValue }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={[styles.container]}>
      <Dropdown
        style={isFocus ? [styles.input, styles.focused] : styles.input}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={options}
        search
        maxHeight={300}
        labelField="name"
        valueField="name"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.name);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default AppTextInputDropDown;

const styles = StyleSheet.create({
  focused: {
    borderColor: COLORS.secondary,
    borderWidth: 2,
  },
  container: {
    backgroundColor: 'white',
    width: '100%',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
  },
  icon: {
    marginRight: 5,
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
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
