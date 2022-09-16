import { StatusBar } from 'expo-status-bar';
import  { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {

  const [name, setName] = useState('John');
  const [age, setAge] = useState('24');
  const [test, setTest] = useState('Math');
  const [score, setScore] = useState('45');
  const [people, setPeople] = useState([
    { name: 'Shaun', id: '1' },
    { name: 'Trust', id: '2' },
    { name: 'Freedom', id: '3' },
    { name: 'Grace', id: '4' },
    { name: 'Oyetola', id: '5' },
    { name: 'Todd', id: '6' },
    { name: 'Fred', id: '7' },
    { name: 'emmanuel', id: '8'}
  ])
  const pressHandler = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id);
    })
  }

  return (
    <View >
      <FlatList
        keyExtractor={(item)=> item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
        numColumns={3}
      />

      {/* <ScrollView>
        
        
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}
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
  input: {
    borderWidth: 1,
    width: 200,
    padding: 10,
    margin: 10,
  },
  item: {
    fontSize: 24,
    backgroundColor: 'pink',
    padding: 5,
    marginTop: 10,
    height: 80,
    margin: 10,
    width: 110
  }
});
