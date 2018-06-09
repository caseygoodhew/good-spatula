const expect = require('chai').expect;
const spatula = require('../src/spatula');

describe('Test that spatula', function() {
    it('does what it\'s supposes to do', function() {
        const markup = ['<div data-name="bowser" class="surprise-father">',
            '<div data-name="mario" class="player player-one">Mario</div>',
            '<div data-name="luigi" class="player player-two">Luigi</div>',
            '</div>'
        ].join('');

        const parent = spatula(markup);
        const selection = parent.select('.player');

        selection.forEach((x, i) => {
            const result = i ? 'Luigi' : 'Mario';
            expect(x.text()).to.equal(result);
        });

        expect(selection.map(x => x.attr('data-name'))).to.deep.equal(['mario', 'luigi']);

        expect(parent.html()).to.equal(markup);
    });

    it('is rewrappable', function() {
        const markup = ['<div data-name="bowser" class="surprise-father">',
            '<div data-name="mario" class="player player-one">Mario</div>',
            '<div data-name="luigi" class="player player-two">Luigi</div>',
            '</div>'
        ].join('');

        const first = spatula(markup);
        const second = spatula(first);

        expect(first.html()).to.equal(markup);
        expect(second.html()).to.equal(markup);
    });
});