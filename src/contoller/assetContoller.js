
var assetController = function(Asset)
{
    var post = function(req,res){
        var asset = new Asset(req.body);
        asset.save();
        res.send(asset);
    };

    var get = function(req,res){
        var query = req.query;
        Asset.find(query, function(err,assets) {
        if (err) 
            res.status(500).send(err);
        else
            res.json(assets);
        })
   };

  return {
      post:post,
      get:get
  }
};
   
module.exports=assetController;