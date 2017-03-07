var express = require('express');

var router = function(Asset) {
  
var atRouter = express.Router();
var atController = require('../contoller/assetContoller')(Asset);
var atIdController = require('../contoller/assetIdContoller')(Asset);


//middleware to substitue the redudent code in put, get  & patch
atRouter.use('/:assetId', atIdController.findIdMiddleware);

atRouter.route('/')
  .get(atController.get)
  .post(atController.post);

  atRouter.route('/:assetId')
  .get(atIdController.get)
  .put(atIdController.put)
  .patch(atIdController.patch)
  .delete(atIdController.deleteid);

  return atRouter;
};

module.exports = router;
