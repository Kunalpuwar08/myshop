import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import { Colors } from '../utils';
import { scale } from '../utils/Matrix';

const CInput = ({
  label,
  placeholder,
  IsRightIcon,
  rightIcon,
  otherStyle,
  inputStyle,
  onChangeText,
  ...props
}) => {
  return (
    <View style={[styles.container, otherStyle]}>
      <Text style={[styles.label, {display: label ? 'flex' : 'none'}]}>
        {label}
      </Text>
      <View style={[styles.inputContainer, inputStyle]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#888"
          onChangeText={onChangeText}
          {...props}
        />
        {IsRightIcon && rightIcon}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: scale(10),
  },
  label: {
    fontSize: scale(16),
    marginBottom: scale(5),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: scale(1),
    borderColor: '#888',
  },
  input: {
    flex: 1,
    fontSize: scale(18),
    paddingVertical: scale(10),
    color:Colors.black
  },
});

export default CInput;
