import {combineReducers} from 'redux';
import reducer_weather from './reducer_weather';
const combine=combineReducers({
  weather:reducer_weather
});

export default combine;