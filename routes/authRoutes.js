const passport = require('passport');


module.exports = (app) => {
    //after user clicks on in this route, we push them into authenticate flow by passing passport argument
    app.get('/auth/google', passport.authenticate('google',{
        scope: ['profile', 'email']
        })
    );
    app.get('/auth/google/callback', passport.authenticate('google') );
};
