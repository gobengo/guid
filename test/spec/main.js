var createGuid = require('guid');
var assert = require('chai').assert;
var sinon = require('sinon');

describe('guid', function () {
    it('is a function', function () {
        assert.instanceOf(createGuid, Function);
    });
    it('creates GUIDs', function () {
        var guid = createGuid();
        assert.typeOf(guid, 'string');
        assert.equal(guid.split('-').length, 5);
    });
});
