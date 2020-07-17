const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
//fetching users schema from User.js
const User = mongoose.model('users');

//Serialize the User id to pass it as a cookie. This 'user' is what we get back from DB in below function
//calling serialize and deserialize are taken care by passport
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//See Notes for how the id came
passport.deserializeUser((id, done) => {
     User.findById(id)
     .then(user => {
        done(null, user);
     });
});

//creates new instance of GoogleStrategy. Saying passport to be aware of googleoauth strategy
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientsecret,
    //this is the Url user will be redirected after user grants permission. we keep this link also in google oath
    //so that google cross verifies
    callbackURL : '/auth/google/callback',
    //to not get error bcz of http or https
    proxy : true
    },
    //second argument to google auth, callback function logic. We tell passport that we are done by using 'done'
    (accessToken, refreshToken, profile, done) => {
        //check if the user already exists
        //this is an asynchronus call so we cant use const user = User.findOne().instead returnspromise(so we use then)
        User.findOne({googleId : profile.id})
            .then((existingUser) => {
                if(existingUser){
                    //we already have an record with this id
                    //null - means no error, second argument- tells passport we are finished, this is the user
                    done(null,existingUser);
                }else{
                    //make an new record with this Id
                    //creates a new model instance of the user,like one record in DB
                    //save will save this model instance in DB.
                    new User({ googleId : profile.id})
                    .save()
                    .then(user => done(null, user));
                }
            });
    } 
));