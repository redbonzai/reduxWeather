<<<<<<< HEAD
import axios from 'axios';
const API_KEY = 'de235288a5f2a9fd5d865f75d2bec841';

export const FETCH_WEATHER  = 'FETCH_WEATHER';
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    //console.log('Request: ', request );
    return {
        type: FETCH_WEATHER,
        payload: request
    };
=======
import axios from 'axios';
const API_KEY = 'de235288a5f2a9fd5d865f75d2bec841';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
>>>>>>> 02ca3294a9055e182ac83b5a90be7cfc938157ed
}