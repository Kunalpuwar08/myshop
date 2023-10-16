import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import LikedList from '../screens/LikedList/LikedList';
import CartScreen from '../screens/Cart/CartScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import {StyleSheet, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../utils';
import {scale} from '../utils/Matrix';

const Tabs = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tabs.Navigator
      screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Text style={styles.txt}>Home</Text>
            ) : (
              <Feather name="home" size={24} color={'#8F959E'} />
            ),
        }}
      />
      <Tabs.Screen
        name="Like"
        component={LikedList}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Text style={styles.txt}>Liked</Text>
            ) : (
              <Feather name="heart" size={24} color={'#8F959E'} />
            ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Text style={styles.txt}>Cart</Text>
            ) : (
              <Feather name="shopping-bag" size={24} color={'#8F959E'} />
            ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Text style={styles.txt}>Profile</Text>
            ) : (
              <Feather name="user" size={24} color={'#8F959E'} />
            ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  txt: {
    fontSize: scale(11),
    color: Colors.appBG,
    fontWeight: 'bold',
  },
});
