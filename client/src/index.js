import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'; //helpers
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
//To create a new instance of our redux store with reducer, second arg is initial state
const store = createStore(reducers, {}, applyMiddleware(reduxThunk)); 
//Takes two arguments , first is App component instance and second where we want to render a DOM node.
ReactDOM.render(
//Provider is a react component that know how to rechnage redux store, an it informs all its children component (App)
<Provider store = {store}> <App/> </Provider>, 
document.querySelector('#root'));
console.log('stripe key is ', process.env.REACT_APP_STRIPE_KEY);
console.log('environment is ', process.env.NODE_ENV);