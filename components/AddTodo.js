import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, {useState} from 'react'

export default function AddTodo({submitHandler}) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }
  return (
    <View style={styles.container}>
          
          <TextInput onChangeText={changeHandler} placeholder='New Todo...' style={ styles.formInput } />
          <Button
              title='Add'
              color='purple'
              onPress={() => submitHandler(text)}
          />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        
    },
    formInput: {
        padding: 10,
        marginBottom: 20,
        borderBottomColor: 'purple',
        borderBottomWidth: 1,

    },
    
})