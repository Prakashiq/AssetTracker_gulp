var assetValidator = function() {

var reqValidator = function(req, next) {
    req.checkBody("_id", "AssetId is require").notEmpty();
    req.checkBody("AssetType","AssetType is require").notEmpty();
    req.checkBody("Subtitle","Subtitle is require").notEmpty(); 
    req.checkBody("SerailNum","SerailNum is require").notEmpty(); 
    req.checkBody("VendorNum","VendorNum is require").notEmpty(); 
    req.checkBody("MfgrMdlNum","MfgrMdlNum is require").notEmpty(); 
   // req.checkBody("AssetStatus","AssetStatus is require").notEmpty(); 
    req.checkBody("Location","Location is require").notEmpty(); 
//     req.checkBody("IPAddress","IPAddress is require").notEmpty(); 
//     req.checkBody("MACAddress","MACAddress is require").notEmpty(); 

    next(null, req.validationErrors() );
    };

    return {
       reqValidator:reqValidator
    };
};

module.exports = assetValidator();
