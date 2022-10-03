import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Travis');
  const [age, setAge] = useState('32');
  // const [person, setPerson] = useState({name: 'Mario', age: 40 })

  const pressHandler = () => {
    setName('Georgieo')
    setPerson({ name: 'Luigi', age: 45 })
  }

  return (
    <View style={styles.container}>    
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
    alignItems: 'center',
    justifyContent: 'center',
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
  }
 
});
