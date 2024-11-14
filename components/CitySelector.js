import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CitySelector = ({ setCity }) => {
  return (
    <View style={styles.container} className="">
      <Text style={styles.label}>Enter City:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="City Name" 
        onChangeText={(text) => setCity(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
  },
});

export default CitySelector;
