var bitter = require('../');
var should = require('should');
require('mocha');

var match = require('./fixtures/match.json');
var noMatch = require('./fixtures/no-match.json');

describe('genoset bitter', function() {
  it('should match a genome with genoset bitter', function() {
    bitter(match).should.equal(true);
  });
  it('should not match a genome without genoset bitter', function() {
    bitter(noMatch).should.equal(false);
  });
});