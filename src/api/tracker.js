import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const instance = axios.create({
    baseURL: 'http://203f2bf9.ngrok.io' // ngrok conection -> 8 hours conection and change
})

instance.interceptors.request.use( // identificarse una vez logeado
    async (config) => { // cada vez q se hace una req
        const token = await AsyncStorage.getItem('token');
        if(token){
            console.log(token);
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => { // cuando hay error
        return Promise.reject(err);
    }
)

export default instance;