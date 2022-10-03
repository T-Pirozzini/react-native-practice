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
      <Text>My Name Is: {name}.</Text>
      <Text>His name is {person.name} and his age is {person.age}.</Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={pressHandler} />
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
  buttonContainer: {
    marginTop: 20,

  }
 
});
