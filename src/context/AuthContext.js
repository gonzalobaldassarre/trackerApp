import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch(action.type){
        case 'ADD_ERROR':
            return { ...state, errorMessage: action.payload };
        case 'SIGNIN':
            return { errorMessage: '' , token: action.payload };
        case 'CLEAR_ERROR_MESSAGE':
            return { ...state, errorMessage: '' };
        case 'SIGNOUT':
            return { errorMessage: '', token: null };
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token) {
        dispatch({ type: 'SIGNIN', payload: token })
        navigate('TrackList');
    }
    else {
        navigate('Signin');
    }
    
}

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'CLEAR_ERROR_MESSAGE' });
}


const signup = (dispatch) => async ({ email, password }) => {
    try{
        const response = await trackerAPI.post('/signup', { email, password });
        await AsyncStorage.setItem('token',response.data.token);
        dispatch({ type: 'SIGNIN', payload: response.data.token });
        navigate('TrackList');
    }
    catch (err){
        console.log(err.message);
        dispatch({ type: 'ADD_ERROR', payload: 'Something wnt wrong, try again' });
    }
}

const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerAPI.post('/signin', { email, password });
        await AsyncStorage.setItem('token',response.data.token);
        dispatch({ type: 'SIGNIN', payload: response.data.token });
        navigate('TrackList'); 
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: 'ADD_ERROR',
            payload: 'Something went wrong with sign in'
        });
    }
};


const signout = (dispatch) => async () => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'SIGNOUT' });
        navigate('Signin');
}


export const { Provider,Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin }, // object with actions 
    { 
        token: null, 
        errorMessage: '',
    }
)