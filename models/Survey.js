const mongoose = require('mongoose');
const {Schema} = mongoose;
const RecipientSchema =  require('./Recipient');

const surveySchema = new Schema({
    title : String,
    body : String,
    subject : String,
    //Array of subDocumet collections
    recipients: [RecipientSchema],
    //in the survey form user is given two options to select yes or no, Ex: Do u like my app?
    yes : {type : Number, default: 0},
    no : {type : Number, default: 0},
    //relatin with user and survey, every survey belong a user
    //we assign a type ID ie user id, ref : User tells mongoose that this belongs to User collection
    //mangoose automatically takes User as users
    _user : {type: Schema.Types.ObjectId, ref: 'User' },
    dateSent : Date,
    lastResponded: Date
});

mongoose.model('surveys', surveySchema);