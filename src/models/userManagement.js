var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userModel = new Schema({
    _id: {type:String},
    firstName: {type:String},
    middleInitial: {type:String, default:'A'},
    lastName: {type:String},
    userStatus: {type:String},
    password: {type:String}, 
    AssociateNumber: {type:Number}
});

module.exports = mongoose.model('user',userModel);