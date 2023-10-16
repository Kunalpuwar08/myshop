import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../utils';
import {scale} from '../utils/Matrix';

const CBack = ({title, showBackButton = true, IsrightIcon, rigthIcon}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {showBackButton && (
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" style={styles.backIcon} />
        </TouchableOpacity>
      )}
      <View>{title && <Text style={styles.title}>{title}</Text>}</View>
      <View>{IsrightIcon && rigthIcon}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(10),
    height: scale(50),
    margin: scale(8),
  },
  backContainer: {
    backgroundColor: '#F5F6FA',
    height: scale(45),
    width: scale(45),
    borderRadius: scale(22),
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: scale(24),
    color: Colors.black,
  },
  title: {
    fontSize: scale(18),
    color: Colors.black,
    fontWeight:'bold'
  },
});

export default CBack;
