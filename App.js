import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Travis', id: '1' },
    { name: 'Yoshi', id: '2' },
    { name: 'Mario', id: '3' },
    { name: 'Chun-li', id: '4' },
    { name: 'Link', id: '5' },
    { name: 'Luigi', id: '6' },
    { name: 'Toad', id: '7' },    
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

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />      

      <ScrollView>
        {people.map(item => (
          <View key={item.id}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
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
    marginHorizontal: 10,
    marginTop: 24,
  }
 
});
