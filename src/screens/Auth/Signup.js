import {SafeAreaView, StyleSheet, Switch, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utils';
import CBack from '../../components/CBack';
import {scale} from '../../utils/Matrix';
import CInput from '../../components/CInput';
import CButton from '../../components/CButton';
import {useNavigation} from '@react-navigation/core';

const Signup = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <CBack />
      <Text style={styles.heading}>Sign Up</Text>
      <View style={{width: '90%', alignSelf: 'center'}}>
        <CInput label={'Username'} />
        <CInput label={'Password'} />
        <CInput label={'Email Address'} />
        <View style={styles.rememberContainer}>
          <Text>Remember me</Text>
          <Switch
            trackColor={{false: '#767577', true: '#34C759'}}
            thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View>
        <CButton
          buttonStyle={styles.createBtn}
          title={'Sign Up'}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
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
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
