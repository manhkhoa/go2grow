import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import MessageInput from './components/MessageInput';
import ListText from './components/ListText';

export default function App() {
  const [listMessages, setListMessages] = useState([]);

  const addMessageHandler = messageTitle => {
    setListMessages(currentMessages => [
      ...currentMessages,
      { id: Math.random().toString(), value: messageTitle }
    ]);
  };

  return (
    <View style={styles.container}>
      <MessageInput onAddMessage={addMessageHandler} />
      <FlatList
        style={styles.viewContent}
        keyExtractor={(item, index) => item.id}
        data={listMessages}
        renderItem={itemData => <ListText title={itemData.item.value} />}
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
