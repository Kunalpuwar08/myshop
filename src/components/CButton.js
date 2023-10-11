import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { scale } from '../utils/Matrix';

const CButton = ({ title, onPress, buttonStyle, textStyle }) => {
    return (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: scale(10),
        borderRadius: scale(5),
        alignItems: 'center',
        justifyContent:'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CButton;
