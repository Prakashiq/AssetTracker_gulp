
var assetIdController = function(Asset)
{
   var get = function(req,res){
        var returnAsset = req.asset.toJSON();
        returnAsset.links={};
        var newlink = 'http://' + req.headers.host + '/api/assets/?VendorNum=' + returnAsset.VendorNum;
        returnAsset.links.findByThisVendorNum = newlink.replace(' ','%20');
        res.json(returnAsset);
}

  var put = function(req,res){
    console.log(req.asset);

    console.log(req.body);
    
        req.asset._id = req.body._id;
        req.asset.AssetType= req.body.AssetType;
        req.asset.Subtitle= req.body.Subtitle;
        req.asset.SerailNum= req.body.SerailNum;
        req.asset.VendorNum= req.body.VendorNum;
        req.asset.MfgrMdlNum= req.body.MfgrMdlNum;
        req.asset.Location= req.body.Location;
        req.asset.IPAddress= req.body.IPAddress;
        req.asset.AssetStatus= req.body.AssetStatus;
        
        req.asset.save(function(err){
          if(err.errors || err.errmsg )
            res.status(400).send(err.errors || err.errmsg);
          else
            res.json(req.asset);
      });
  }

  var patch= function(req,res){
      if(req.body._id)
        delete req.body._id;
      
      for(var p in req.body)
      { 
        req.asset[p] = req.body[p];
      }
      req.asset.save(function(err){
        if(err.errors || err.errmsg )
          res.status(400).send(err.errors || err.errmsg);
        else
          res.json(req.asset);
      });
   }

   var deleteid = function(req,res){
     req.asset.remove(function(err){
       if (err) 
         res.status(500).send(err);
        else
         res.status(204).send('Asset Removed');
      });
   }

   var findIdMiddleware = function(req,res,next){
    Asset.findById(req.params._id, function(err,asset) {
      if (err) 
        res.status(500).send(err);
      else if (asset)
      {
        req.asset = asset;
        next();
      }
      else
        res.status(404).send('No Asset found');
    });
  }
   
   return {
       get:get,
       put:put,
       patch:patch,
       deleteid:deleteid,
       findIdMiddleware:findIdMiddleware
   };
};

module.exports= assetIdController;