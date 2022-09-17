import { StatusBar } from 'expo-status-bar';
import  { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Todo from './components/Todo';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'i will like to trust and believe Shaun', key: '1' },
    { text: 'i will like to trust and believe Trust', key: '2' },
    { text: 'i will like to trust and believe Freedom', key: '3' },
  ])
  
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todos => todos.key != key);
    });
  }
  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ]
    });
  }

  return (
    <View >
      {/* header  */}
      <Header />
      <View style={styles.form}>
        {/* todo form */}
        <AddTodo submitHandler={submitHandler} />
        <View style= {styles.contens}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <Todo item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    marginVertical: 10,
  },
  contens: {
    marginVertical: 10,
  },
  
  
});
