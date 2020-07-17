//keys.js - figure out what keys need to be used
//automatically set to production when running on heroku
if(process.env.NODE_ENV == 'production'){
    //we are in production return the prod set of keys
    module.exports = require('./prod');
}else{
    //we are in development, return dev set of keys
    //get the dev file and export
    module.exports =  require('./dev');
}