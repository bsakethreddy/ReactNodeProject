const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../config/keys')

//creates new instance of GoogleStrategy. Saying passport to be aware of googleoauth strategy
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientsecret,
    //this is the Url user will be redirected after user grants permission. we keep this link also in google oath
    //so that google cross verifies
    callbackURL : '/auth/google/callback'
    },
    //second argument to google auth
    (accessToken, refreshToken, profile, done) => {
        console.log('accessToken', accessToken);
        console.log('refreshToken ', refreshToken);
        console.log('profile: ', profile);
    } 
));