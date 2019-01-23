import {FETCH_WEATHER } from '../Actions/index';

export default function(state=[],action){
    switch(action.type){
        case FETCH_WEATHER:
        return [action.payload.data,...state];
        //or return state.concat([action.payload.data])
    }
    return state;
}