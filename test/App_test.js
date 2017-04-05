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