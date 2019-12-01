import axios from 'axios';

export default axios.create({
    baseURL: 'http://1fa13497.ngrok.io' // ngrok conection -> 8 hours conection and change
})