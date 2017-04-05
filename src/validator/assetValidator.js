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
    });

        //Trim and escape the name field. 
    req.sanitize('_id').escape();
    req.sanitize("assetType").escape();
    req.sanitize("subtitle").escape();
    req.sanitize("serailNum").escape();
    req.sanitize("vendorNum").escape();
    req.sanitize("mfgrMdlNum").escape();
    req.sanitize("location").escape();

    req.sanitize('_id').trim();
    req.sanitize("assetType").trim();
    req.sanitize("subtitle").trim();
    req.sanitize("serailNum").trim();
    req.sanitize("vendorNum").trim();
    req.sanitize("mfgrMdlNum").trim();
    req.sanitize("location").trim();

    next(null, req.validationErrors() );
    };

    return {
       reqValidator:reqValidator
    };
};

module.exports = assetValidator();
