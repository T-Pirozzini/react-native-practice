import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={styles.header}>
        <Text style={styles.bold}>Hello World!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>lorem ipsum <Text>test</Text> dolor isit amet.</Text>
        <Text>lorem ipsum dolor isit amet.</Text>
        <Text>lorem ipsum dolor isit amet.</Text>
      </View>
      <StatusBar style="auto" />
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
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,    
  },
  boldText: {
    fontWeight: 'bold',
  }
});
