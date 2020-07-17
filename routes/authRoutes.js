const passport = require('passport');


module.exports = (app) => {
    //after user clicks on in this route, we push them into authenticate flow by passing passport argument
    app.get('/auth/google', passport.authenticate('google',{
        //asking for profile and name to google
        scope: ['profile', 'email']
        })
    );
    //Take the code that we got from above call and use it to get the profile info
    app.get('/auth/google/callback', passport.authenticate('google') );
    app.get('/api/logout', (req,res) => {
        req.logout(); //this func is automatically attacked by passport
        res.send(req.user);
    });
    //cookie session attaches data to req and passport tries to extract it. req.session
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};
