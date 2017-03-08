var assetValidator = function() {

var reqValidator = function(req, next) {

    req.checkBody("_id", "User Id is require").notEmpty();
    req.checkBody("firstName","firstName is require").notEmpty();
    //req.checkBody("middleInitial","middleName is require").notEmpty(); 
    req.checkBody("lastName","lastName is require").notEmpty(); 
    req.checkBody("userStatus","userStatus is require").notEmpty(); 
    req.checkBody("password","password is require").notEmpty(); 
    req.checkBody("AssociateNumber","AssociateNumber is require").notEmpty();

    req.checkBody({
        '_id' :{
            optional: false, // won't validate if field is empty
            isLength: {options: [{ max: 10 }],
            errorMessage: 'UserId cant be more than 10 chars long' // Error message for the validator, takes precedent over parameter message
            } 
        },
        'password' :{
            optional: false, // won't validate if field is empty
            isLength: {options: [{ max: 8 }],
            errorMessage: 'Password cant be more than 8 chars long' // Error message for the validator, takes precedent over parameter message
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
