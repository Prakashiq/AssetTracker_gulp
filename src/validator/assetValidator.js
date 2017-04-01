var assetValidator = function() {

var reqValidator = function(req, next) {
    req.checkBody("_id", "AssetId is require").notEmpty();
    req.checkBody("assetType","AssetType is require").notEmpty();
    req.checkBody("subtitle","Subtitle is require").notEmpty(); 
    req.checkBody("serailNum","SerailNum is require").notEmpty(); 
    req.checkBody("vendorNum","VendorNum is require").notEmpty(); 
    req.checkBody("mfgrMdlNum","MfgrMdlNum is require").notEmpty(); 
    req.checkBody("location","Location is require").notEmpty();

    req.checkBody({
        'iPAddress' :{
            optional: true, // won't validate if field is empty
            isLength: {options: [{ min: 7, max: 15 }],
            errorMessage: 'Invalid IPAddress' // Error message for the validator, takes precedent over parameter message
            } 
        },
        'mACAddress' :{
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
