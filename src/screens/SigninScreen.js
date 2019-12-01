import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import  { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation }) => {
    
    const { state, signin, clearErrorMessage } = useContext(AuthContext);
    return (
    <View style={styles.container}>
        <NavigationEvents 
            onWillBlur={  clearErrorMessage }
        />
        <AuthForm
            headerText="Sign In to yout Account"
            errorMessage={state.errorMessage}
            submitButtonText="Sign in"
            onSubmit={signin}
        />
        <NavLink 
            linkText="Do not have an account? Create one"
            routeName="Signup"
        />
    </View>)
}

SigninScreen.navigationOptions = () => {    // SignupScreen.navigationOptions = { 
    return {                                //      header: null
        header: null                        // }
    }                                       // ARE THE SAME, TWO DIF WAYS TO DO THAT

}

const styles = StyleSheet.create({
    container: {
        marginBottom: 250,
        flex: 1,
        justifyContent: 'center'
    },
});

export default SigninScreen;
