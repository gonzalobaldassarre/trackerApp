import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { SafeAreaView } from 'react-navigation';
import { requestPermissionsAsync } from 'expo-location';

const TrackCreateScreen = () => {
    const [err, setErr]= useState(null);
    const StartWatching = async () => {
        try {
            await requestPermissionsAsync();
        }
        catch (e) {
            setErr(e);
        }
    }

    useEffect( () => {
        StartWatching();
    }, []);
    return <SafeAreaView>
     <Text h2> TrackCreateScreen </Text>
     <Map/>
     {err ? <Text>Please enable location permissions</Text> : null}
     </SafeAreaView>
}
const styles = StyleSheet.create({});

export default TrackCreateScreen;
