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
AssetType: {type:String, required:true, validate: requiredStringValidator},
Subtitle: {type:String, required:true, validate: requiredStringValidator},
SerailNum: {type:String, required:true, validate: requiredStringValidator},
VendorNum: {type:String, required:true, validate: requiredStringValidator},
MfgrMdlNum: {type:String, required:true, validate: requiredStringValidator}, 
AssetStatus: {type:String, default:'Not In Use', enum:assetStatus},
Location: {type:String,required:true, validate: requiredStringValidator},
IPAddress: {type:String},
MACAddress: {type:String},
});

 
//assetModel.path('_id').required(true,'AssetId is require');
module.exports = mongoose.model('asset',assetModel);