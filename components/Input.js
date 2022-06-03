import React from 'react';
import {TextInput, View, Text, StyleSheet } from 'react-native'

function Input({label}){
    return(<View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input}></TextInput>
           </View>
        );
}

export default Input;

const styles = StyleSheet.create({
    label:{
        color:'red'
    },
    input:{
        height:54
    },
    inputContainer:{
        borderColor:'#F77D2B',
        borderWidth:2
    }
});