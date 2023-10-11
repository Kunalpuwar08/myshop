import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'; // You can replace this with your desired icon library

const CInput = ({label, placeholder, IsRightIcon, rightIcon, otherStyle,inputStyle}) => {
  return (
    <View style={[styles.container, otherStyle]}>
      <Text style={[styles.label,{display:label?'flex':'none'}]}>{label}</Text>
      <View style={[styles.inputContainer,inputStyle]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#888"
        />
        {IsRightIcon && rightIcon}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#888',
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 10,
  },
});

export default CInput;
