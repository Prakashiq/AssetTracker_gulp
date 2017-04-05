var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var assetStatus = ['InUse','NotInUse', 'Damaged' ];

var requiredStringValidator = [
    function (val) {
        var testVal = val.trim();
        return (testVal.length > 0)
    }, '{PATH} cannot be empty'];


var assetModel = new Schema({
_id: {type:String, required:true, validate: requiredStringValidator },
assetType: {type:String, required:true, validate: requiredStringValidator},
subtitle: {type:String, required:true, validate: requiredStringValidator},
serailNum: {type:String, required:true, validate: requiredStringValidator},
vendorNum: {type:String, required:true, validate: requiredStringValidator},
mfgrMdlNum: {type:String, required:true, validate: requiredStringValidator}, 
assetStatus: {type:String, default:'InUse', enum:assetStatus},
location: {type:String,required:true, validate: requiredStringValidator},
iPAddress: {type:String},
mACAddress: {type:String}
});

 
module.exports = mongoose.model('asset',assetModel);