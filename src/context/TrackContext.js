import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import TrackForm from '../components/TrackForm';
const trackReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_TRACKS':
            return action.payload;
        default:
            return state;
    };
};

const fetchTracks = dispatch => async () => {
    const response = await trackerApi.get('/tracks');
    dispatch({ type: 'FETCH_TRACKS', payload: response.data});
};
const createTrack = dispatch => async (name, locations) => { 
    console.log('FROM CREATE TRACK CONTEXT:',locations);
    
    await trackerApi.post('/tracks', { name, locations });
};

export const { Provider , Context } = createDataContext(
    trackReducer,
    { createTrack, fetchTracks},
    []
);
///APPP!