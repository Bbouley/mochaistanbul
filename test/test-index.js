var chai = require('chai');
chai.expect();
chai.should();
var testModule = require('../index.js');

describe('Istanbul Code Coverage', function() {

    it('should return a hello message for a specific name', function() {
        var name = 'Bradley';
        var result = testModule.getCoverageHello(name);
        result.should.contain(name);
    })

})
