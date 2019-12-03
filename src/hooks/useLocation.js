import { useEffect, useState, useContext } from 'react';
import { PermissionsAndroid } from 'react-native'
import Geolocation from 'react-native-geolocation-service';
import { Context as LocationContext } from '../context/LocationContext.js';

let sww=null;

export default (shouldTrack, callback) => {
    const { state : { recording }} = useContext(LocationContext);
    const [err, setErr]= useState(null);
    const StartWatching = async () => {
        sww = setInterval( async () => {
            try {
                console.log('will perrm');
                const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                    'title': 'Tack App needs permissions',
                    'message': 'Track App needs access to your location '
                });
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {                    
                    await Geolocation.getCurrentPosition(
                        (position) => {
                            console.log({latitude: position.coords.latitude, longitude: position.coords.longitude});
                            callback({latitude: position.coords.latitude, longitude: position.coords.longitude});
                        },
                        (error) => {
                            console.log(error.code, error.message);
                        },
                        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                    );
                } 
                else {
                console.log( "ACCESS_FINE_LOCATION permission denied" )
                
                }
            }
            catch (e) {
                console.log(e);
                setErr(e);
            }
        }, 3000);
    }
    

    useEffect( () => {
        console.log('SHOULD TRACK ', shouldTrack);
        clearInterval(sww);
        if(recording){
            StartWatching();
        }
        else {
            if(shouldTrack){
                StartWatching();
            }
            else {
                clearInterval(sww);
            }
        }
    }, [shouldTrack,recording]);

    return[err];
};