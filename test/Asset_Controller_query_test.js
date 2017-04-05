var request = require('supertest');

describe('Asset find By query:', function(){

    beforeEach(function(){
        server = require('../app');
        
    });

    it('Find a asset by id', function(done){
          request(server)
        .get('/api/assets/?_id=0002')
        .expect(200, done); 
    });

    it('Find a asset by AssetType', function(done){
          request(server)
        .get('/api/assets/?AssetType="Hand Scanner"')
        .expect(200, done); 
    });

    it('Find a asset by Subtitle', function(done){
          request(server)
        .get('/api/assets/?Subtitle="Cabled Scanner"')
        .expect(200, done); 
    });

    it('Find a asset by SerailNum', function(done){
          request(server)
        .get('/api/assets/?SerailNum="M3504"')
        .expect(200, done); 
    });

    it('Find a asset by VendorNum', function(done){
          request(server)
        .get('/api/assets/?VendorNum="sys"')
        .expect(200, done); 
    });

    it('Find a asset by MfgrMdlNum', function(done){
          request(server)
        .get('/api/assets/?MfgrMdlNum="P450-3234"')
        .expect(200, done); 
    });

    it('Find a asset by Location', function(done){
          request(server)
        .get('/api/assets/?Location="Receiving"')
        .expect(200, done); 
    });

    it('Find a asset by IPAddress', function(done){
          request(server)
        .get('/api/assets/?IPAddress="10.34.34.342"')
        .expect(200, done); 
    });

    it('Find a asset by AssetStatus', function(done){
          request(server)
        .get('/api/assets/?AssetStatus="InUse"')
        .expect(200, done); 
    });

    it('Find a asset by id which not available', function(done){
          request(server)
        .get('/api/assets/?_id=9999')
        .expect(200,[], done); 
    });

    it('Find a asset by AssetType', function(done){
          request(server)
        .get('/api/assets/?AssetType="Hand Scanner"')
        .expect(200,[], done); 
    });

    it('Find a asset by Subtitle', function(done){
          request(server)
        .get('/api/assets/?Subtitle="Cabled Scanner"')
        .expect(200,[], done); 
    });

    it('Find a asset by SerailNum', function(done){
          request(server)
        .get('/api/assets/?SerailNum="M3504"')
        .expect(200,[], done); 
    });

    it('Find a asset by VendorNum', function(done){
          request(server)
        .get('/api/assets/?VendorNum="sys"')
        .expect(200,[], done); 
    });

    it('Find a asset by MfgrMdlNum', function(done){
          request(server)
        .get('/api/assets/?MfgrMdlNum="P450-3234"')
        .expect(200,[], done); 
    });

    it('Find a asset by Location', function(done){
          request(server)
        .get('/api/assets/?Location="Receiving"')
        .expect(200,[], done); 
    });

    it('Find a asset by IPAddress', function(done){
          request(server)
        .get('/api/assets/?IPAddress="10.34.34.342"')
        .expect(200,[], done); 
    });

    it('Find a asset by AssetStatus', function(done){
          request(server)
        .get('/api/assets/?AssetStatus="InUse"')
        .expect(200,[], done); 
    });
});