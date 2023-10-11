import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, Keyboard } from 'react-native';
import { scale } from '../utils/Matrix';

const OTPInput = ({ onOTPSubmit }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleOTPChange = (index, value) => {
    const updatedOTP = [...otp];
    updatedOTP[index] = value;
    setOtp(updatedOTP);

    if (index < 3 && value !== '') {
      inputRefs[index + 1].current.focus();
    } else if (index === 3 && value !== '') {
      const enteredOTP = updatedOTP.join('');
      onOTPSubmit(enteredOTP);
      Keyboard.dismiss(); // Close the keyboard
    }
  };

  const handleBackspace = (index) => {
    if (index > 0) {
      const updatedOTP = [...otp];
      updatedOTP[index - 1] = '';
      setOtp(updatedOTP);
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={inputRefs[index]}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(value) => handleOTPChange(index, value)}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              handleBackspace(index);
            }
          }}
          value={digit}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: scale(77),
    height: scale(98),
    fontSize: scale(24),
    textAlign: 'center',
    borderWidth: scale(1),
    borderColor: '#E7E8EA',
    borderRadius: scale(10),
  },
});

export default OTPInput;
