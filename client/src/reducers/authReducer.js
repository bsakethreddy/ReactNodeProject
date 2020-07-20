import {FETCH_USER} from '../actions/types';
//using recieved action it determines the channges to the state
//1st argument default state = null, auth reducer returns null or payload or false
export default function(state = null, action){
    switch (action.type){
        case FETCH_USER:
            //if the user is loged out, payload in empty string(or false)
            return action.payload || false; 
        default:
            return state;
    }
}