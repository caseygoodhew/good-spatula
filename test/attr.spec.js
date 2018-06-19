const expect = require('chai').expect;
const utils = require('./utils')();
const _attr = require('../src/attr');

describe('Test that attr', function() {
    it('returns value when querying the a defined attribute', function() {
        const attr = _attr(utils.mockSpatula, utils.defaultDom);
        expect(attr('class')).to.equal('surprise-father');
        expect(attr('data-name')).to.equal('bowser');
    });

    it('returns undefined when querying an undefined attribute', function() {
        const attr = _attr(utils.mockSpatula, utils.defaultDom);
        expect(attr('qwertyuiop')).to.be.undefined;
    });

    it('returns array of values when querying an array', function() {
        const attr = _attr(utils.mockSpatula, () => [utils.defaultDom(), {
            attribs: null
        }]);
        expect(attr('class')).to.deep.equal(['surprise-father', undefined]);
    });
});