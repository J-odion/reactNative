import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Todo from "./components/Todo";


export default function App() {
  const [todos, setTodos] = useState([
    { text: "i will like to trust and believe Shaun", key: "1" },
    { text: "i will like to trust and believe Trust", key: "2" },
    { text: "i will like to trust and believe Freedom", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todos) => todos.key != key);
    });
  };
  const submitHandler = (text) => {
    if (text.length > 10) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert(
        "OPPS!!",
        "Todos must be clearly spelt out, and to do so your characters must be more than 10 letters",
        [{ text: "Understood" }]
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={styles.container}>
        {/* header  */}
        <Header />
        <View style={styles.form}>
          {/* todo form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.contens}>
            
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <Todo item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    marginVertical: 10,
    flex: 1,
  },
  contens: {
    marginTop: 10,
    flex: 1,
  },
});
