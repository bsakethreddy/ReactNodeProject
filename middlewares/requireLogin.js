//This function is very common to many route handlers, checks whether user is logedin or not, then only proceeds to that route
//example usage in '/api/stripe route in biliingRoutes file
//next is func will be called after middleware is complete, middleware1 after finished it calls middleware2
module.exports = (req,res, next) => {
    if(!req.user){
        return res.status(401).send({error: 'You must log in'});
    }
    //if everyhting is good, continue to the next middleware or route handler   
    next();
}