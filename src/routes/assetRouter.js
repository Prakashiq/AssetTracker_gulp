var express = require('express');

var router = function(Asset) {
  
var atRouter = express.Router();

atRouter.route('/')
  .get(function(req,res){
  var query = req.query;

    Asset.find(query, function(err,assets) {
      if (err) 
        res.status(500).send(err);
      else
        res.json(assets);
    });
    
  })
  .post(function(req,res){
    var asset = new Asset(req.body);
    asset.save();
    res.send(asset);
  });

  //middleware to substitue the redudent code in put, get  & patch
  atRouter.use('/:assetId', function(req,res,next){
    Asset.findById(req.params.assetId, function(err,asset) {
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
  });

  atRouter.route('/:assetId')
  .get(function(req,res){

        res.json(req.asset);

  })
  .put(function(req,res){
        req.asset.AssetId = req.body.AssetId;
        req.asset.AssetType= req.body.AssetType;
        req.asset.Subtitle= req.body.Subtitle;
        req.asset.SerailNum= req.body.SerailNum;
        req.asset.VendorNum= req.body.VendorNum;
        req.asset.MfgrMdlNum= req.body.MfgrMdlNum;
        req.asset.Location= req.body.Location;
        req.asset.IPAddress= req.body.IPAddress;
        req.asset.AssetStatus= req.body.AssetStatus;
        req.asset.save(function(err){
          if (err) 
            res.status(500).send(err);
          else
            res.json(req.asset);
        });
  })
   .patch(function(req,res){
      if(req.body._id)
        delete req.body._id;
      
      for(var p in req.body)
      { 
        req.asset[p] = req.body[p];
      }
      req.asset.save(function(err){
        if (err) 
         res.status(500).send(err);
        else
         res.json(req.asset);
      });
   })
   .delete(function(req,res){
     req.asset.remove(function(err){
       if (err) 
         res.status(500).send(err);
        else
         res.status(204).send('Asset Removed');
      });
   });

  return atRouter;
};

module.exports = router;
