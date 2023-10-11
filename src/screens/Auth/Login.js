import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../../utils';
import CBack from '../../components/CBack';
import CInput from '../../components/CInput';
import {useNavigation} from '@react-navigation/core';
import CButton from '../../components/CButton';
import {scale} from '../../utils/Matrix';

const Login = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <CBack />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.heading}>Welcome</Text>
          <Text style={{textAlign: 'center'}}>
            Please enter your data to continue
          </Text>
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <CInput label={'Username'} />
          <CInput label={'Password'} />
          <View style={{alignSelf:'flex-end'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
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
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Text style={{textAlign: 'center', fontSize: 13}}>
              By connecting your account confirm that you agree with our Term
              and Condition
            </Text>
          </View>
          <CButton
            buttonStyle={styles.createBtn}
            title={'Login'}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  forgotText:{
    color:'#EA4335'
  }
});
