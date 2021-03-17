import React from 'react';
import { StyleSheet, Text, View}from 'react-native';

export default function Header() {
    return (
        <View style = {styles.header }>
            <Text style = {styles.title}>Tasks</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        height : 90,
        paddingTop : 40,
        backgroundColor : '#00994C',

    },
    title : {
        textAlign : 'center',
        color : '#FFF',
        fontSize :30,
        fontWeight : 'bold',
    }


});
