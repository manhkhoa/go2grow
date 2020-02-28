import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredMessage, setEnteredMessage] = useState('');
  const [listMessages, setListMessages] = useState([]);

  const messageInputHandler = (enteredText) => {
    setEnteredMessage(enteredText);
  }

  const addMessageHandler = () => {
    setListMessages(currentMessages => [...currentMessages, enteredMessage]);
  }

  const resetMessageHandler = () => {
    setListMessages([]);
    setEnteredMessage('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter the message here..." value={enteredMessage} onChangeText={messageInputHandler} style={styles.input} />
        <Button title="ADD" onPress={addMessageHandler} />
      </View>
      <View style={styles.inputContainer}>
        <Button title="Reset" onPress={resetMessageHandler} />
      </View>
      <ScrollView style={styles.viewContent}>
        {listMessages.map(message => (
          <View key={Math.random().toString()} style={styles.listText}>
            <Text>{message}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  viewContent: {
    width: '80%'
  },
  listText: {
    backgroundColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderColor: 'blue',
    borderWidth: 1,
    width: '100%'
  },
});
