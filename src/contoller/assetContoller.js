

var assetController = function(Asset)
{
    var post = function(req,res){
        
        var assetValidate= require('../validator/assetValidator');
       
        //assetValidate.reqValidator(err,req,res);
        assetValidate.reqValidator(req,  function(err,validateres) { //eslint-disable-line no-unused-vars

            if (validateres) {
                res.status(400).send(validateres);
            } else {
               var asset = new Asset(req.body);
                asset.save(function(err){
                    if(err.errors || err.errmsg )
                        res.status(400).send(err.errors || err.errmsg);
                    else
                        res.status(201).send('Asset Saved');
                });
                
            }
        });

        };
       

    var get = function(req,res){
        var query = req.query;
        Asset.find(query, function(err,assets) {
            if (err) 
                res.status(500).send(err);
            else
            {
                var returnAssets=[];
                assets.forEach(function(element, index, array){ //eslint-disable-line no-unused-vars
                    var newAsset = element.toJSON();
                    newAsset.links={};
                    newAsset.links.self = 'http://' + req.headers.host + '/api/assets/' + newAsset._id;
                    returnAssets.push(newAsset);
                });
                res.json(returnAssets);
            }
        })
   };

  return {
      post:post,
      get:get
  }
};
   
module.exports=assetController;