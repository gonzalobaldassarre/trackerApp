import React, { useState } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Spacer from './Spacer'; 
import { NavigationEvents } from 'react-navigation';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const clearEmailAndPassword = () => {
        setEmail('');
        setPass('');
    }

    return (
        <>
            <NavigationEvents 
                onWillFocus={ clearEmailAndPassword }
            />
            <Spacer>
                <Text h3> {headerText} </Text>
            </Spacer>
            
                <Input label="Email" value={ email } placeholder="Email" autoCapitalize='none' autoCorrect={false} onChangeText={ setEmail }/>
            <Spacer/>
            <Input label="Password" value={ password } placeholder="Password" autoCapitalize='none' autoCorrect={false} onChangeText= { setPass } secureTextEntry/>
            { errorMessage ? <Text style={styles.errorMessage}>{ errorMessage }</Text> : null }
            <Spacer>
                <Button title={ submitButtonText } onPress={ () => onSubmit({ email, password }) }/>
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        textAlign: 'center',
        color: 'red',
        marginTop: 5,       
    },
});

export default AuthForm;