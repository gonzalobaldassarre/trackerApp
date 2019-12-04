import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
import { navigate } from '../navigationRef';
//exporto hooks

export default () => {
    const { createTrack } = useContext(TrackContext);
    const { state: { locations, name }, reset} = useContext(LocationContext);

    const saveTrack = async () => {
        console.log('FROM CREATE TRACKS LOCATIONS:',locations);
        let newLocations = [];
        for (let i=0; i<locations.length ;i++) {
            let newLock = { 
                timestamp: 100000000+i*100,
                coords: {
                    latitude: locations[i].latitude,
                    longitude: locations[i].longitude,
                    altitude: 100,
                    accuracy: 100,
                    heading: 100,
                    speed: 100
                }
            }
            newLocations.push(newLock);
        }
        console.log('NEW LOCATIONS: ',newLocations);
        await createTrack(name, newLocations);
        reset();
        navigate('TrackList');
    }

    return [saveTrack]; // por convencion se devuelve un array, por mas que tenga un solo elemento
};

//retorna una funcion que crea un Track usando la API, usar vatios contextos para exportar una funcion que tiene en cuenta el estado en general(mas de un contexto)