import {FETCH_SURVEYS} from '../actions/types';

export default function(state = [], action){
    switch (action.type){
        case FETCH_SURVEYS:
            //if the user is loged out, payload in empty string(or false)
            return action.payload || false; 
        default:
            return state;
    }
}