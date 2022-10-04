import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Travis', key: '1' },
    { name: 'Yoshi', key: '2' },
    { name: 'Mario', key: '3' },
    { name: 'Chun-li', key: '4' },
    { name: 'Link', key: '5' },
    { name: 'Luigi', key: '6' },
    { name: 'Toad', key: '7' },    
  ])

  const [name, setName] = useState('Travis');
  const [age, setAge] = useState('32');
  // const [person, setPerson] = useState({name: 'Mario', age: 40 })

  const pressHandler = () => {
    setName('Georgieo')
    setPerson({ name: 'Luigi', age: 45 })
  }

  return (
    <View style={styles.container}> 

    <ScrollView>
      { people.map(item => {
        return (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      })}
    </ScrollView>

      <Text>Enter name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={(val) => setName(val)} />
      <Text>Enter age:</Text>
      <TextInput 
        keyboardType="numeric" 
        style={styles.input}
        placeholder='e.g. 25'
        onChangeText={(val) => setAge(val)} />         
      <Text>Name: {name}, Age: {age}</Text> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  item: {
    marginTop: 24,
    padding:30,
    backgroundColor: 'pink',
    fontSize: 24,

  }
 
});
