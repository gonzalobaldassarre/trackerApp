import React from 'react';
import { Text, TouchableOpacity,StyleSheet } from 'react-native';
import  { withNavigation } from 'react-navigation';

const NavLink = ({navigation, linkText, routeName}) => {
   return <>
        <TouchableOpacity onPress={() => navigation.navigate({routeName})}>
            <Text style={styles.signin} >{linkText}</Text>
        </TouchableOpacity>
    </>
};

const styles = StyleSheet.create({
    signin: {
        color: 'blue',
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 16
    },
});

export default withNavigation(NavLink);