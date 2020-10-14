import React, {Component} from 'react';
//Components, BrowserRouter - brains of react router, looks at url and changes set of componnets.
//Route - used to setup a kindoff rule bewteen address and components
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

// for testing-  const SurveyNew = () => <h2> SurveyNew </h2>
class App extends Component {
    //fetching the current user the instance the component loads
    componentDidMount(){
        this.props.fetchUser();
    }
    render() {
        // class name = container ensures that our compnent doesnt strech fulll size of window
        return (
            <BrowserRouter>
                <div className = "container" > 
                    <Header/>
                    <Route exact = {true} path = "/" component = {Landing}/>
                    <Route exact path = "/surveys" component = {Dashboard}/>
                    <Route path = "/surveys/new" component = {SurveyNew}/>
                </div>
            </BrowserRouter>
        );
    }
};

//actions are assigned to App component as props
export default connect(null, actions)(App);