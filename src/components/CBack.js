import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../utils';
import { scale } from '../utils/Matrix';

const CBack = ({ title, showBackButton = true, IsrightIcon,rigthIcon}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {showBackButton && (
        <TouchableOpacity style={styles.backContainer} onPress={() => navigation.goBack()}>
          {/* <AntDesign name="arrowleft" style={styles.backIcon} /> */}
        </TouchableOpacity>
      )}
      {title && <Text style={styles.title}>{title}</Text>}
      {IsrightIcon && (
        rigthIcon
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 50,
    margin:scale(8)
  },
  backContainer:{
    backgroundColor:'#F5F6FA',
    height:45,
    width:45,
    borderRadius:22,
    alignItems:'center',
    justifyContent:'center'
  },
  backIcon: {
    fontSize: 24,
    color: Colors.black, 
  },
  title: {
    fontSize: 18,
    color: Colors.black,
  },
});

export default CBack;
