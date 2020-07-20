import axios from 'axios';
import {FETCH_USER} from './types';
//Purpose of an action creator is to return a action that will be sent to all diff reducers, which then produce
//new values of the state and updates that state inside the redux store, the redux store then sends the updated
//state back to all react components.
//but using Redux Thunk we can manually dispatch actions to reducers from action creator.ie below
export const fetchUser = () => async dispatch => {
        //To make contact to backend server
        //we want to dispatch only after this request is completed
        const res = await axios.get('api/current_user');
        dispatch({type: FETCH_USER, payload: res.data});
    };