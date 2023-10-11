import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../utils'
import { scale } from '../../utils/Matrix'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const navigation = useNavigation();
    React.useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Auth')
        }, 2000)
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.logo}>myshop</Text>
        </SafeAreaView>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.appBG,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        fontSize: scale(24),
        color: Colors.white,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})