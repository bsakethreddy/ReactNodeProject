const mongoose = require('mongoose');
const {Schema} = mongoose;

const recipientSchema = Schema({
    email: String,
    responded : {type : Boolean, default: false}
});
//This is a subdocument collection, rather than regestering with mongoose we export this schema
module.exports = recipientSchema;