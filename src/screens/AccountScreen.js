import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import Icon  from 'react-native-vector-icons/FontAwesome';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    
    return (
    <SafeAreaView>
        <Text style={{ fontSize: 48 }}> AccountScreen</Text>
        <Spacer>
            <Button title="Sign Out" onPress={ signout }/>
        </Spacer>
    </SafeAreaView>
    )
}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <Icon name="gear" size={20} />
};

const styles = StyleSheet.create({});

export default AccountScreen;
