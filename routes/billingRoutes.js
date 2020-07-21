//after creating this file hookit up in index.js
const Keys = require('../config/keys');
const stripe = require('stripe')(Keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');
//Use stripe npm module to take token and exchnaging it for charge
module.exports = app => {
    //third argument is response handler(ie,arrow func (res,res)), 2nd arg is the middleware we created 
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount : 500,
            currency: 'inr',
            description : '$5 for 5 credits',
            //token id
            source: req.body.id
        });
        //Take user model and add 5 credits to them and then send the update user model to the client.
        //Get the reference to the current person who made this req, req.user, this was setup automatically by passport
        req.user.credits += 5;
        //Now take the model and persist into database, it is a asyn req
        const user = await req.user.save();
        //Now, respond to the req with updated user to the browser
        res.send(user); 
    });
};