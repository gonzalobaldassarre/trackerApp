import React, { useContext, useEffect, useCallback } from 'react';
import { StyleSheet,PermissionsAndroid } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Context as LocationContext } from '../context/LocationContext.js';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import Icon  from 'react-native-vector-icons/FontAwesome';

// <NavigationEvents onWillBlur={()=>{}}/> 
// withNavigationFocus : componente recibe una nueva propiedad { isFocused }, que sirve para 
// saber si el componetne se esta mostrando en pantalla
const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext);
    const callback = useCallback(location => {
        addLocation(location, state.recording);
    }, [state.recording]);

    const [err] = useLocation(isFocused, callback);

    return <SafeAreaView>
     <Text h2> TrackCreateScreen </Text>
    
     <Map />
     {err ? <Text>Please enable location permissions</Text> : null}
     <TrackForm/>
     </SafeAreaView>
}

TrackCreateScreen.navigationOptions = {
    title: 'Add track',
    tabBarIcon: <Icon name="plus" size={20} />
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
