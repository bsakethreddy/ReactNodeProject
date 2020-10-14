//there is no need of using lodas. but its ok
import _ from 'lodash';
import React, {Component} from 'react';
//redux form avoids the creating of action creators and reducers
import {reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';
//capital letters because dont change it.

class SurveyForm extends Component{
//handleSubmit is got from reduxForm
    renderFields(){
        //below code is same as this vanilla js
        // <div>{FIELDS.map(field => (<Field key={field.name} type="text" {...field} component={SurveyField} /> ))} </div>
        
        return _.map(formFields, ({label, name}) => {
            return (
                <Field key = {name} label = {label} name = {name} type="text" component={SurveyField} />
            );
        });
    }
    render(){
        //<i> stands for icon, type ="submit" is linked to formsubmit
        //in handleSubmit we pass function without brackets() ie(onSurveySubmit). because if we keep brackets
        //it will be called instanly when the compenents renders,we dont want that
        return(
            <div>
                <form onSubmit = {this.props.handleSubmit(this.props.onSurveySubmit)}>
                {this.renderFields()}
                <Link to = "/surveys" className = "red btn-flat white-text">
                    Cancel
                </Link>
                <button type = "submit" className = "teal btn-flat right white-text">
                    Next
                    <i className = "material-icons right"> done </i>
                </button>
                
                </form>
            </div>
        );
    }
}
function validate(values){
    //if errors object is empty then redux orm assumes it has no errors
    const errors = {};
    errors.recipients = validateEmails(values.recipients || '');
    _.each(formFields, ({name}) => {
        if(!values[name] ){
            errors[name] = 'You must provide a value'
        }
    });
   
    return errors;
}
//reduxform helper
//similar to connect, reduxform get rid of actoncreator etc. validate: validate, key and value same
//validate is object func passed automatically runs
export default reduxForm({
    validate,
    //where redux form stores all the values in the redux store
    form: 'surveyForm',
    //dont destroy the form, will keep the values
    destroyOnUnmount: false
})(SurveyForm);