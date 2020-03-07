import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import MessageInput from './components/MessageInput';
import ListText from './components/ListText';

export default function App() {
  const [listMessages, setListMessages] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addMessageHandler = messageTitle => {
    if(messageTitle.length == 0){
      return;
    }
    setListMessages(currentMessages => [
      ...currentMessages,
      { id: Math.random().toString(), value: messageTitle }
    ]);
    setIsAddMode(false);
  };

  const removeMessageHandler = messageID => {
    setListMessages(currentMessages => {
      return currentMessages.filter((message) => message.id !== messageID);
    });
  }

  const resetMessageAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Add new message" onPress={() => setIsAddMode(true)} />
      <MessageInput visible={isAddMode} onAddMessage={addMessageHandler} onReset={resetMessageAdditionHandler} />
      <FlatList
        style={styles.viewContent}
        keyExtractor={(item, index) => item.id}
        data={listMessages}
        renderItem={itemData => (
          <ListText 
            id={itemData.item.id} 
            onDelete={removeMessageHandler} 
            title={itemData.item.value} 
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContent: {
    width: '80%',
  },
});
