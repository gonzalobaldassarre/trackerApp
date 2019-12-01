import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import  { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {

    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
    <View style={styles.container}>
        <NavigationEvents 
            onWillBlur={ clearErrorMessage }
        />
        <AuthForm
            headerText="Sign up for Tracker"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={signup}
        />
        <NavLink 
            linkText="Already have an account? Sign in"
            routeName="Signin"
        />
    </View>)
}

SignupScreen.navigationOptions = () => {    // SignupScreen.navigationOptions = { 
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

export default SignupScreen;
