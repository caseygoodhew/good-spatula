const expect = require('chai').expect;
const utils = require('./utils')();
const _text = require('../src/text');

describe('Test that text', function() {
    it('succeeds with a single dom', function() {
        const text = _text(utils.mockSpatula, utils.defaultDom);
        expect(text()).to.equal('MarioLuigi');
    });

    it('succeeds a dom array', function() {
        const text = _text(utils.mockSpatula, () => [utils.defaultDom(), utils.defaultDom()]);
        expect(text()).to.equal('MarioLuigiMarioLuigi');
    });

    it('succeeds with an empty dom array', function() {
        const text = _text(utils.mockSpatula, () => []);
        expect(text()).to.equal('');
    });

    it('succeeds with an undefined', function() {
        const text = _text(utils.mockSpatula, () => {
            return;
        });
        expect(text()).to.equal('');
    });
});