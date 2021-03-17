import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard, Settings  }from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem'
import AddTodos from './components/addTodos'
// import Testbox from './components/Testbox';
// import {DrawerNavigator} from 'react-navigation';
// import SettingsScreen from './components/SettingsScreen';


// class App extends Component {
//   render() {
//     return(
//       <Myapp/>
//     )
//   }
// }



// export default App;

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Do the dishes', key: '1'},
    { text: 'Buy some french fries', key:'2'},
    { text:'Do some Workout', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {
      setTodos((prevTodos) => {
        return [
          {text : text, key : Math.random().toString() },
          ...prevTodos
      ];
    });
}

  return (
    // <Testbox />
    <TouchableWithoutFeedback onPress = {() =>{
      Keyboard.dismiss();
      console.log ('dismissed keyboard')
    }}>
    <View style={styles.container}> 
      <Header />
      <View style = {styles.content}>
        <AddTodos submitHandler = {submitHandler} />
        <View style = {styles.list}>
          <FlatList
            data = {todos}
            renderItem = {({ item }) => (
              <TodoItem item = {item} pressHandler = {pressHandler} />
            )}
          />
        </View> 
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}


// const Myapp = DrawerNavigator({
//   Settings: {
//     screen :
//     SettingsScreen
//   }
// })





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',

  },
  content : {
    padding : 20,
    flex : 1,
    // backgroundColor : '#ddd',
  },
  list : {
    flex : 1,
    marginTop : 20,
    marginBottom : 20,
    // backgroundColor : '#D3D3D3',
  }
})
 


  

