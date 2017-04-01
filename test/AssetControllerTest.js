var request = require('supertest');

describe('Server Get Validation:', function(){
    beforeEach(function(){
        server = require('../app');
    });

    it('Is Server Alive',function(done){
        request(server)
        .get('/api/Assets')
        .expect(200,done);
    });
    it('Page Not found',function(done){
        request(server)
        .get('/')
        .expect(404,done);
    });
});

describe('Server POST Validation:', function(){
    beforeEach(function(){
        server = require('../app');
        
    });

    it('Asset Id not found', function(done) {
        asset = {
            assetType: "Hand Scanner",
            subtitle: "Cabled Scanner",
            serailNum: "M3504",
            vendorNum: "Symbol",
            mfgrMdlNum: "P450-3234",
            location: "Receiving",
            iPAddress: "10.34.34.342",
            assetStatus: "Not In Use"
        };
          request(server)
        .post('/api/Assets')
        .send(asset)
        .expect(400,[{"param":"_id","msg":"AssetId is require"}],done);
    });

    it('AssetType not found', function(done) {
        asset = {
            _id: "2098",
            subtitle: "Cabled Scanner",
            serailNum: "M3504",
            vendorNum: "Symbol",
            mfgrMdlNum: "P450-3234",
            location: "Receiving",
            iPAddress: "10.34.34.342",
            assetStatus: "Not In Use"
        };
          request(server)
        .post('/api/Assets')
        .send(asset)
        .expect(400,[{"param":"assetType","msg":"AssetType is require"}],done);

    });

    it('Subtitle not found', function(done) {
        asset = {
            _id: "2098",
            assetType: "Hand Scanner",
            serailNum: "M3504",
            vendorNum: "Symbol",
            mfgrMdlNum: "P450-3234",
            location: "Receiving",
            iPAddress: "10.34.34.342",
            assetStatus: "Not In Use"
        };
          request(server)
        .post('/api/Assets')
        .send(asset)
        .expect(400,[{"param":"subtitle","msg":"Subtitle is require"}],done);

    });

    it('SerailNum not found', function(done) {
        asset = {
            _id: "2098",
            assetType: "Hand Scanner",
            subtitle: "Cabled Scanner",
            vendorNum: "Symbol",
            mfgrMdlNum: "P450-3234",
            location: "Receiving",
            iPAddress: "10.34.34.342",
            assetStatus: "Not In Use"
        };
          request(server)
        .post('/api/Assets')
        .send(asset)
        .expect(400,[{"param":"serailNum","msg":"SerailNum is require"}],done);

    });

    it('VendorNum not found', function(done) {
        asset = {
            _id: "2098",
            subtitle: "Cabled Scanner",
            assetType: "Hand Scanner",
            serailNum: "M3504",
            mfgrMdlNum: "P450-3234",
            location: "Receiving",
            iPAddress: "10.34.34.342",
            assetStatus: "Not In Use"
        };
          request(server)
        .post('/api/Assets')
        .send(asset)
        .expect(400,[{"param":"vendorNum","msg":"VendorNum is require"}],done);

    });

    it('MfgrMdlNum not found', function(done) {
        asset = {
            _id: "2098",
            subtitle: "Cabled Scanner",
            assetType: "Hand Scanner",
            serailNum: "M3504",
            vendorNum: "Symbol",
            location: "Receiving",
            iPAddress: "10.34.34.342",
            assetStatus: "Not In Use"
        };
          request(server)
        .post('/api/Assets')
        .send(asset)
        .expect(400,[{"param":"mfgrMdlNum","msg":"MfgrMdlNum is require"}],done);

    });

    it('Location not found', function(done) {
        asset = {
            _id: "2098",
            subtitle: "Cabled Scanner",
            assetType: "Hand Scanner",
            serailNum: "M3504",
            vendorNum: "Symbol",
            mfgrMdlNum: "P450-3234",
            iPAddress: "10.34.34.342",
            assetStatus: "Not In Use"
        };
          request(server)
        .post('/api/Assets')
        .send(asset)
        .expect(400,[{"param":"location","msg":"Location is require"}],done);

    });

    it('iPAddress lenght greater than 15 digit', function(done) {
        asset = {
            _id: "2098",
            subtitle: "Cabled Scanner",
            assetType: "Hand Scanner",
            serailNum: "M3504",
            vendorNum: "Symbol",
            mfgrMdlNum: "P450-3234",
            location: "Receiving",
            iPAddress: "110.234.334.342.",
            assetStatus: "Not In Use"
        };
          request(server)
        .post('/api/Assets')
        .send(asset)
        .expect(400,[{"param":"iPAddress","msg":"Invalid IPAddress", "value":"110.234.334.342."}],done);

    });

    it('iPAddress lenght less than 7 digit', function(done) {
        asset = {
            _id: "2098",
            subtitle: "Cabled Scanner",
            assetType: "Hand Scanner",
            serailNum: "M3504",
            vendorNum: "Symbol",
            mfgrMdlNum: "P450-3234",
            location: "Receiving",
            iPAddress: "0.0.0."
        };
        request(server)
        .post('/api/Assets')
        .send(asset)
        .expect(400,[{"param":"iPAddress", "msg":"Invalid IPAddress","value": "0.0.0."}],done);
    });

    it('mACAddress lenght greater than 17 digit', function(done) {
        asset = {
            _id: "2098",
            subtitle: "Cabled Scanner",
            assetType: "Hand Scanner",
            serailNum: "M3504",
            vendorNum: "Symbol",
            mfgrMdlNum: "P450-3234",
            location: "Receiving",
            iPAddress: "10.34.34.342",
            assetStatus: "Not In Use",
            mACAddress: "00-14-224-01-23-453"
        };
          request(server)
        .post('/api/Assets')
        .send(asset)
        .expect(400, [{ 
            param: 'mACAddress',
            msg: 'MAC address should be 17 chars long',
            value: '00-14-224-01-23-453' }], done); 

    });

});


describe('Asset DB validation:', function(){

    beforeEach(function(){
        server = require('../app');
        
    });

    it('Save Asset',function(){

    });

    it('Delete asset', function(){

    });

});