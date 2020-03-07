import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const MessageInput = props => {
    const [enteredMessage, setEnteredMessage] = useState('');

    const messageInputHandler = enteredText => {
        setEnteredMessage(enteredText);
    };

    const addMessageHandler = () => {
        props.onAddMessage(enteredMessage);
        setEnteredMessage('');
    };
    
    return (
        <Modal visible={props.visible} animationType="fade">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Enter the message here..."
                    value={enteredMessage}
                    onChangeText={messageInputHandler}
                    style={styles.input}
                />
                <View style={styles.buttonContainer}>
                    <Button title="ADD" onPress={addMessageHandler} />
                    <Button title="RESET" color="red" onPress={props.onReset} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
});

export default MessageInput;