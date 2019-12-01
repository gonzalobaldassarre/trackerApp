import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
const Map = () => {

    return <MapView 
        style={styles.map}
        initialRegion={{
            latitude: -34.61315,
            longitude: -58.37723,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }}
        >
            <Polyline/>
        </MapView>
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    }
});

export default Map