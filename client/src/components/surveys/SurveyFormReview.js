//show user form for review
import React from 'react';
import _ from 'lodash';
//connect helper to reach out to redux store
import {connect} from 'react-redux'
import formFields from './formFields';
//provides hisory object useflul to redirect
import {withRouter} from 'react-router-dom';
//importing action creator and connecting to 'connect' helper
import * as actions from '../../actions'

//we get belows as props from below func
//passing actions to connect at bottom and recive it as a prop
const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {
    //below line ({name, label} ) is same as field, where field contains name and lable
    const reviewFields = _.map(formFields, ({name, label}) => {
        //list of elements , so every div has a key.
        return (
            <div key = {name} >
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });
    return (
        <div>
            <h5>Please confirm your entries </h5>
            {reviewFields}
            <button
                className = "yellow darken-3 white-text btn-flat"
                onClick = {onCancel}
            >Back</button>
            <button 
            // type = "submit"
            //to call action creator, arrow func is for telling it not to execute till user clicks
            onClick={() => submitSurvey(formValues, history)}
            className = "green white-text btn-flat right" >
                Send Survey
                <i className = "material-icons right">email</i>
            </button>
        </div>
    );
}

//to use the connect func, we define this func, called with entiire state obj
//mapping redux state and mapping it to props
//after this func, we gett all the values we returned as a props in above component 
function mapStateToProps(state){
    // console.log(state);
    return{
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter( SurveyFormReview));