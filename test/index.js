var chai = require('chai');
var expect = chai.expect;
chai.should();

var parse = require('../index.js');

describe('Parse', function() {

  it('should get the id from a twitter status URI', function() {
    parse('https://twitter.com/prhonedev/statuses/315586729463660545?utm_medium=twitter&utm_source=twitterfeed').should.equal('315586729463660545');
  });

  it('should return null when given a different URI', function() {
    expect(parse('https://example.com/prhonedev/statuses/315586729463660545?utm_medium=twitter&utm_source=twitterfeed')).to.be.null;
  });

});
