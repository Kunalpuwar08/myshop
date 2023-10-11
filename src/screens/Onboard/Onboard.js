import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../utils'
import { onBoardImg } from '../../assets'
import CButton from '../../components/CButton'
import { scale } from '../../utils/Matrix'

const Onboard = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={onBoardImg} style={styles.img} />
            <View style={styles.floatBox}>
                <Text style={styles.heading}>Look Good, Feel Good</Text>
                <Text style={styles.desc}>Create your individual & unique style and look amazing everyday.</Text>
                <View style={styles.btnContainer}>
                    <CButton title={'Men'} buttonStyle={styles.btn} textStyle={{ color: '#8F959E' }} />
                    <CButton title={'Women'} buttonStyle={[styles.btn, { backgroundColor: Colors.appBG }]} textStyle={{ color: Colors.white }} />
                </View>
                <CButton title={'Skip'} textStyle={{ color: '#8F959E' }} />
            </View>
        </SafeAreaView>
    )
}

export default Onboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.appBG
    },
    img: {
        height: '100%',
        resizeMode: 'contain',
    },
    floatBox: {
        width: '90%',
        bottom: scale(12),
        height: scale(250),
        padding: scale(25),
        alignSelf: 'center',
        position: 'absolute',
        borderRadius: scale(10),
        backgroundColor: Colors.white,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: scale(25),
        textAlign: 'center',
        color: Colors.black,
    },
    desc: {
        color: '#8F959E',
        textAlign: 'center',
        fontSize: scale(15),
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: scale(20),
        justifyContent: 'space-between',
    },
    btn: {
        width: '48%',
        height: scale(60),
        backgroundColor: '#F5F6FA',
    }
})