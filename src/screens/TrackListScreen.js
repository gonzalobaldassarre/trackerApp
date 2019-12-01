import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
    return <>
        <Text style={{ fontSize: 48 }}> TrackListScreen </Text>
        <Button title="Go to trackDetail" onPress={ () => navigation.navigate('TrackDetail')}/>
        <Button title="Go to loginflow" onPress={ () => navigation.navigate('loginFlow')}/>
        </>
}
const styles = StyleSheet.create({});

export default TrackListScreen;
