import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SplashScreen,
  Onboard,
  Auth,
  ForgotPassword,
  Login,
  NewPassword,
  Signup,
  VerifyCode,
} from '../screens';
import BottomTab from './BottomTab';
import DetailScreen from '../screens/DetailScreen/DetailScreen';
import CartScreen from '../screens/Cart/CartScreen';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Tab">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboard" component={Onboard} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Forgot" component={ForgotPassword} />
      <Stack.Screen name="VerifyCode" component={VerifyCode} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="Tab" component={BottomTab} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name='Detail' component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;
