var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var assetModel = new Schema({
_id: {type:String},
AssetType: {type:String},
Subtitle: {type:String},
SerailNum: {type:String},
VendorNum: {type:String},
MfgrMdlNum: {type:String}, 
AssetStatus: {type:String, default:'Not In Use'},
Location: {type:String},
IPAddress: {type:String},
MACAddress: {type:String},

});

module.exports = mongoose.model('asset',assetModel);