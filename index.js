const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
//This is an express middleware
const bodyParser = require('body-parser');

//The order the below statements should b ein order. because first we should define schema in User file
//then we create a instance in passport file
require('./models/User');
require('./models/Survey');
//to include the passport.js file or to run
require('./services/passport');
//connectiong to mongoose using the URI generated by mongoose
mongoose.connect(keys.mongoURI);
const app = express();
//If any request comes, this middleware will parse the body and assign it to req.body property of incoming objct
app.use(bodyParser.json());
//function, where we pass cookieSession, to that we provide configuration object
//tell express to make use of cookies
app.use(
    cookieSession({
        //cookie to last 30 days
        maxAge : 30 * 24 * 60 * 60 * 1000,
        //key to encrypt our cookie
        keys : [keys.cookieKey]
    })
);
//Telling passport to use cookies to make authentication
app.use(passport.initialize());
//adding user model instance to req object
app.use(passport.session());

//Passes app argument to authRoutes 
//both files export a function, require statement calls function with app.
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

//only in production, for the routes which are not defined in server but defined by react router in client
if(process.env.NODE_ENV == 'production'){
    //express will serveup production assets like our main.js, or main.css file
    //if any get req comes and we dont have then look into client/build file.
    app.use(express.static('client/build'));
    //express will serveup the index.html file if it dosent recognize the route
    //after checking build file, still we dont have the resource give them back the index.html
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const PORT = process.env.PORT || 5000;
app.listen(PORT);