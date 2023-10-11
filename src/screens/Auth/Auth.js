import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../utils'
import { scale } from '../../utils/Matrix'
import CButton from '../../components/CButton'
import { useNavigation } from '@react-navigation/native'

const Auth = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ height: scale(1) }} />
      <Text style={styles.heading}>Let's Get Started</Text>
      <View>
        <TouchableOpacity style={[styles.btn, { backgroundColor: '#4267B2' }]}>
          <Text style={styles.btnText}>facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: '#1DA1F2' }]}>
          <Text style={styles.btnText}>twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: '#EA4335' }]}>
          <Text style={styles.btnText}>google</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.textContainer}>
          <Text style={{ textAlign: 'center' }}>Already have an account?{' '}</Text>
          <TouchableOpacity>
            <Text style={{ color: Colors.black }}>Signin</Text>
          </TouchableOpacity>
        </View>
        <CButton buttonStyle={styles.createBtn} title={'Create an Account'} onPress={() => navigation.navigate('Signup')} />
      </View>
    </View>
  )
}

export default Auth

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-between'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: scale(28),
    textAlign: 'center',
    color: Colors.black,
  },
  btn: {
    height: scale(50),
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(10),
    marginVertical: scale(5)
  },
  btnText: {
    color: Colors.white,
    fontSize: scale(17),
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  createBtn: {
    borderRadius: 0,
    height: scale(75),
    backgroundColor: Colors.appBG,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scale(25)
  }
})