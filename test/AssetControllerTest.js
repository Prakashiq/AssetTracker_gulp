var should = require('should');
var sinon = require('sinon');


describe('Asset Controller Test', function (){
    describe('Post', function(){
        it('should not allow an empty AssetId', function() {
            var Asset = function(asset){this.save= function(){}};
            
            var req = {
                body: {
                       AssetType: 'Hand Scanner'
                }
            }

            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            }

            var assetContoller = require('../src/contoller/assetContoller')(Asset);

            assetContoller.post(req,res);

            res.status.calledWith(400).should.equal(true, 'Bad status ' + res.status.args[0][0]);
            res.send.calledWith('AssetId is require').should.equal(true);
        });
    });
});