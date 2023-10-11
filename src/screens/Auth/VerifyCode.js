import {
  Image,
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../utils';
import CBack from '../../components/CBack';
import CButton from '../../components/CButton';
import {forgotImg} from '../../assets';
import {scale} from '../../utils/Matrix';
import {useNavigation} from '@react-navigation/core';
import OTPInput from '../../components/OTPInput';

const VerifyCode = () => {
  const navigation = useNavigation();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [isTimerRunning, setTimerRunning] = useState(true);
  const [timerSeconds, setTimerSeconds] = useState(60);

  useEffect(() => {
    let timerInterval;

    if (isTimerRunning) {
      timerInterval = setInterval(() => {
        if (timerSeconds > 0) {
          setTimerSeconds(timerSeconds - 1);
        } else {
          setTimerRunning(false);
        }
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
  }, [isTimerRunning, timerSeconds]);

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

  const handleResend = () => {
    setTimerRunning(true);
    setTimerSeconds(60);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: '80%'}}>
        <CBack />
        <Text style={styles.heading}>Verification Code</Text>
        <Image source={forgotImg} style={styles.img} />
        <View style={{width: '90%', alignSelf: 'center'}}>
          <OTPInput onOTPSubmit={value => console.log(value, 'OTP')} />
        </View>
      </View>
      {!isKeyboardVisible && (
        <View
          style={{bottom: 0, height: '20%', justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={[styles.desc, {color: Colors.black}]}>{`00:${
              timerSeconds < 10 ? '0' : ''
            }${timerSeconds} `}</Text>
            <Pressable
              disabled={timerSeconds !== 0 ? true : false}
              onPress={handleResend}>
              <Text style={styles.desc}>resend confirmation code</Text>
            </Pressable>
          </View>
          <CButton
            buttonStyle={styles.createBtn}
            title={'Confirm Code'}
            onPress={() => navigation.navigate('NewPassword')}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default VerifyCode;

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
  img: {
    alignSelf: 'center',
    marginVertical: scale(60),
  },
  inputStyle: {
    width: '90%',
    alignSelf: 'center',
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
