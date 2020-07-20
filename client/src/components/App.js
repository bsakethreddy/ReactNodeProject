import React, {Component} from 'react';
//Components, BrowserRouter - brains of react router, looks at url and changes set of componnets.
//Route - used to setup a kindoff rule bewteen address and components
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h2> Dashboard </h2>
const SurveyNew = () => <h2> SurveyNew </h2>
class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render() {
        return (
            <div className = "container">
               <BrowserRouter>
                <div> 
                    <Header/>
                    <Route exact = {true} path = "/" component = {Landing}/>
                    <Route exact path = "/surveys" component = {Dashboard}/>
                    <Route  path = "/surveys/new" component = {SurveyNew}/>
                </div>
               </BrowserRouter>
            </div>
        );
    }
};

//actions are assigned to App component as props
export default connect(null, actions)(App);