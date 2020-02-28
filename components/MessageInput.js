import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const MessageInput = props => {
    const [enteredMessage, setEnteredMessage] = useState('');

    const messageInputHandler = enteredText => {
        setEnteredMessage(enteredText);
    };
    
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Enter the message here..."
                value={enteredMessage}
                onChangeText={messageInputHandler}
                style={styles.input}
            />
            <Button title="ADD" onPress={props.onAddMessage.bind(this, enteredMessage)} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
    },
});

export default MessageInput;