import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const AppTextInputDropDown = ({ options }) => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState(options);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const filteredData = data
    .filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()))
    .splice(0, 5);

  const renderItem = ({ item }) => (
    <Pressable onPress={() => console.log(item.name)}>
      <Text>{item.name}</Text>
    </Pressable>
  );

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchText}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name.toString()}
      />
    </>
  );
};

export default AppTextInputDropDown;
const styles = StyleSheet.create({
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
