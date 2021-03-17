import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View }from 'react-native';

export default function AddTodos({submitHandler}){
    const [text, setText] = useState('')

    const changeHandler = (val) =>{
        setText(val);
    }

    return (
        <View>
           <TextInput 
           style = {styles.input}
           placeholder = 'New task...'
           onChangeText = {changeHandler}
           />
         <Button onPress = {() => submitHandler(text)} title = 'add task' color = '#00994C' />
        </View>
    )
} 

const styles = StyleSheet.create({
    input : {
        marginBottom : 10,
        paddingHorizontal : 8,
        paddingVertical : 5,
        borderBottomWidth : 1,
        borderBottomColor : '#ddd'
         

    }
})
