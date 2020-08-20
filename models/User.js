//const { Mongoose } = require("mongoose");
const mongoose = require('mongoose');
//the below line is known as destructuring, it is same as const Schema = mongoose.Schema
//Schema object to define individual record property,all the properties the model class hav
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId : String,
    credits : {type : Number, default: 0}
});

//creating a collection 'users' with userSchema, we can fetch this object in passport file and create new record there
mongoose.model('users', userSchema);