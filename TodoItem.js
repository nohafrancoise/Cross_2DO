import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View}from 'react-native';
import { AntDesign } from '@expo/vector-icons';



export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress = {() => pressHandler(item.key)}>
             <View style = {styles.item}>
             <AntDesign name = 'delete' size={20} color = '#555' />
            <Text style = {styles.itemText}> {item.text} </Text>
           </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    item: {
        padding : 20,
        marginTop : 20,
        borderColor : '#bbb',
        borderWidth : 1,
        borderStyle : 'dashed',
        borderRadius : 10,
        flexDirection : 'row',

        
        

    },
    itemText : {
        marginLeft : 10,
    }
})
