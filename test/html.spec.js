const expect = require('chai').expect;
const utils = require('./utils')();
const _html = require('../src/html');

describe('Test that html', function() {
    it('succeeds with a single dom', function() {
        const html = _html(utils.mockSpatula, utils.defaultDom);
        expect(html()).to.equal([
            '<div data-name="bowser" class="surprise-father">',
            '<div data-name="mario" class="player player-one">Mario</div>',
            '<div data-name="luigi" class="player player-two">Luigi</div>',
            '</div>'
        ].join(''));
    });

    it('succeeds a dom array', function() {
        const html = _html(utils.mockSpatula, () => [utils.defaultDom(), utils.defaultDom()]);
        expect(html()).to.equal([
            '<div data-name="bowser" class="surprise-father">',
            '<div data-name="mario" class="player player-one">Mario</div>',
            '<div data-name="luigi" class="player player-two">Luigi</div>',
            '</div>',
            '<div data-name="bowser" class="surprise-father">',
            '<div data-name="mario" class="player player-one">Mario</div>',
            '<div data-name="luigi" class="player player-two">Luigi</div>',
            '</div>'
        ].join(''));
    });

    it('succeeds with an empty dom array', function() {
        const html = _html(utils.mockSpatula, () => []);
        expect(html()).to.equal('');
    });

    it('succeeds with an undefined', function() {
        const html = _html(utils.mockSpatula, () => {
            return;
        });
        expect(html()).to.equal('');
    });
});