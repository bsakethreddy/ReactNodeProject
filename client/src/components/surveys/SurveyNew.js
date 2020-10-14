//Survey New shows survey form and surveyform review.
import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';


//depending on the component state we will show sorvey form review or survey form.
class SurveyNew extends Component{
    //first time in this project we are using component state
    //Below two are same.
    // constructor(props){
    //     super(props);
    //     this.state = {new: true};
    // }
    state = {showFormReview : false}; //state initialization
    //helper method
    renderContent() {
        if(this.state.showFormReview ){
            return <SurveyFormReview
                onCancel = {() => this.setState({showFormReview: false})}
            />;
        }
        //add callback function onSurveySubmit
        return (<SurveyForm
            onSurveySubmit = {() => this.setState({showFormReview : true})}
        />);
    }
    render(){
        return(
            <div>
                {this.renderContent()}
                {/* <SurveyForm/> */}
            </div>
        );
    }
}
export default reduxForm({
    //if we navidate away from suurveynew, set to default.
    form : 'surveyForm'
})(SurveyNew);