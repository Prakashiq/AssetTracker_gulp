var assetValidator = function() {

var reqValidator = function(req, next) {
    req.checkBody("_id", "AssetId is require").notEmpty();
    req.checkBody("AssetType","AssetType is require").notEmpty();
    req.checkBody("Subtitle","Subtitle is require").notEmpty(); 
    req.checkBody("SerailNum","SerailNum is require").notEmpty(); 
    req.checkBody("VendorNum","VendorNum is require").notEmpty(); 
    req.checkBody("MfgrMdlNum","MfgrMdlNum is require").notEmpty(); 
    req.checkBody("Location","Location is require").notEmpty();

    req.checkBody({
        'IPAddress' :{
            optional: true, // won't validate if field is empty
            isLength: {options: [{ min: 7, max: 15 }],
            errorMessage: 'Invalid IPAddress' // Error message for the validator, takes precedent over parameter message
            } 
        },
        'MACAddress' :{
            optional: true, // won't validate if field is empty
            isLength: {options: [{ min: 16, max: 17 }],
            errorMessage: 'MAC address should be 17 chars long' // Error message for the validator, takes precedent over parameter message
            } 
        }
    })

    next(null, req.validationErrors() );
    };

    return {
       reqValidator:reqValidator
    };
};

module.exports = assetValidator();
