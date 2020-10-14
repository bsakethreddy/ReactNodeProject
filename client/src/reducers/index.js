import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

//we wire all the diff reducers 
export default combineReducers({
    //every reducer has to be assigned to key. 
    //this reducers output s stored on state object maintained my redux. ie, state.auth.
    auth : authReducer,
    form : reduxForm,
    surveys: surveysReducer
});