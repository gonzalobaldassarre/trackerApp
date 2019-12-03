import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
import { navigate } from '../navigationRef';
//exporto hooks

export default () => {
    const { createTrack } = useContext(TrackContext);
    const { state: { locations, name }, reset} = useContext(LocationContext);

    const saveTrack = async () => {
        await createTrack(name, locations);
        reset();
        navigate('TrackList');
    }

    return [saveTrack]; // por convencion se devuelve un array, por mas que tenga un solo elemento
};

//retorna una funcion que crea un Track usando la API, usar vatios contextos para exportar una funcion que tiene en cuenta el estado en general(mas de un contexto)