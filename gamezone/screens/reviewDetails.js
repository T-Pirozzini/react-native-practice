import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }) {

  const pressHandler = () => {
    // navigation.navigate("Home")
    navigation.goBack();
  }

  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails Screen</Text>
      <Button title="back to homescreen" onPress={pressHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  }
});