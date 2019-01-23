import axios from 'axios';
const API_KEY = 'eab494385a7ee6ef4e0985f90e93a674';

export const FETCH_WEATHER ='FETCH_WEATHER';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city){
    const url=`${ROOT_URL}&q=${city},US`;
    const request=axios.get(url);
    return{
        type: FETCH_WEATHER,
        payload: request
    };
}