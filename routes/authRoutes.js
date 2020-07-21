const passport = require('passport');


module.exports = (app) => {
    //after user clicks on in this route, we push them into authenticate flow by passing passport argument
    app.get('/auth/google', passport.authenticate('google',{
        //asking for profile and name to google
        scope: ['profile', 'email']
        })
    );
    //Take the code that we got from above call and use it to get the profile info
    //while sending the callback from google all the middleware cookiesession and all happen
    //The middleware passport.authenticate()- takes incoming req, it takes the code out of req, and then goes
    //and fetches the user profile and then it calls our call back in Google Strategy. and then redirect.
    app.get(
        '/auth/google/callback',
         passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        }
         );
    app.get('/api/logout', (req,res) => {
        req.logout(); //this func is automatically attached by passport
        res.redirect('/');
    });
    //cookie session attaches data to req and passport tries to extract it. req.session
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};
