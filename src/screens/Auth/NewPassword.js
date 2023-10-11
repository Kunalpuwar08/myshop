import {Keyboard, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import CBack from '../../components/CBack';
import CInput from '../../components/CInput';
import {scale} from '../../utils/Matrix';
import {Colors} from '../../utils';
import CButton from '../../components/CButton';
import { NativeModules } from 'react-native';

const {ToastModule} = NativeModules;

const NewPassword = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      event => {
        setKeyboardVisible(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: '80%'}}>
        <CBack />
        <Text style={styles.heading}>New Password</Text>
        <View style={{width:'90%',alignSelf:'center',marginTop:scale(120)}}>
          <CInput
            label={'Password'}
            placeholder={'Enter Your Password'}
            otherStyle={styles.inputStyle}
          />
          <CInput
            label={'Confirm Password'}
            placeholder={'Enter Your Confirm Password'}
            otherStyle={styles.inputStyle}
          />
        </View>
      </View>
      {!isKeyboardVisible && (
        <View
          style={{bottom: 0, height: '20%', justifyContent: 'space-between'}}>
          <Text style={styles.desc}>Please write your new password.</Text>
          <CButton
            buttonStyle={styles.createBtn}
            title={'Reset Password'}
            onPress={() => ToastModule.show("Hello from Native Module")}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: scale(28),
    textAlign: 'center',
    color: Colors.black,
  },
  createBtn: {
    borderRadius: 0,
    height: scale(75),
    backgroundColor: Colors.appBG,
  },
  desc: {
    textAlign: 'center',
    alignSelf: 'center',
  },
});
