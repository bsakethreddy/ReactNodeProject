import React, {Component} from 'react';
import StripeCheckout  from 'react-stripe-checkout';
//connect is to pass actions as a prop to Payments, so we can call the functions in actions.
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render(){
        return (
            <StripeCheckout 
                name = "Emaily"
                description = "$5 for 5 email credits"
                amount={500}
                //we get token(entire object) back from stipe callback
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            > 
                <button className = "btn">
                    Add credits
                </button> 
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);