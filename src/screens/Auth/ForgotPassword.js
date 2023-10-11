import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CBack from '../../components/CBack';
import {Colors} from '../../utils';
import {scale} from '../../utils/Matrix';
import {forgotImg} from '../../assets';
import CInput from '../../components/CInput';
import CButton from '../../components/CButton';
import { useNavigation } from '@react-navigation/core';

const ForgotPassword = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: '80%'}}>
        <CBack />
        <Text style={styles.heading}>Forgot Password</Text>
        <Image source={forgotImg} style={styles.img} />
        <CInput
          label={'Email Address'}
          placeholder={'Enter Your Email ID'}
          otherStyle={styles.inputStyle}
        />
      </View>
      <View style={{bottom: 0, height: '20%', justifyContent: 'space-between'}}>
        <Text style={styles.desc}>
          Please write your email to receive a confirmation code to set a new
          password.
        </Text>
        <CButton
          buttonStyle={styles.createBtn}
          title={'Confirm Mail'}
          onPress={() => navigation.navigate('VerifyCode')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

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
  desc:{
    textAlign:'center',
    width:'70%',
    alignSelf:'center'
  }
});
