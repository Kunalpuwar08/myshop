import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import Onboard from '../screens/Onboard/Onboard';
import Auth from '../screens/Auth/Auth';
import Signup from '../screens/Auth/Signup';
import Login from '../screens/Auth/Login';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import VerifyCode from '../screens/Auth/VerifyCode';
import NewPassword from '../screens/Auth/NewPassword';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name='Splash' component={SplashScreen} />
      <Stack.Screen name='Onboard' component={Onboard} />
      <Stack.Screen name='Auth' component={Auth} />
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen name='Login' component={Login} /> */}
      {/* <Stack.Screen name='Forgot' component={ForgotPassword} /> */}
      {/* <Stack.Screen name='VerifyCode' component={VerifyCode} /> */}
      <Stack.Screen name='NewPassword' component={NewPassword} />
    </Stack.Navigator>
  )
}

export default StackNav