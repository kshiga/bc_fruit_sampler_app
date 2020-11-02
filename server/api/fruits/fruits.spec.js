const app = require('../../app')();
const request = require('supertest');
const generateToken = require('../auth/generateToken');

describe('/api/v1/fruits', function() {
  let token;
  before(function(done) {
    generateToken({username: 'foo', scopes: ['fruits:read']}, (err, generatedToken) => {
      if(err) { done(err); return; }
      token = generatedToken;
      done();
    });
  })

  it('should return all fruits', function(done) {
    request(app)
      .get('/api/v1/fruits')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if(err) { done(err); return; }
        res.body.should.be.instanceOf(Array).and.have.lengthOf(19);
        done(err);
      });
  });
  it('should return any fruits with the string "melon" in it', function(done) {
    request(app)
      .get('/api/v1/fruits?name_like=melon')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if(err) { done(err); return; }
        res.body.should.be.instanceOf(Array).and.have.lengthOf(2);
        done(err);
      });
  });
});
