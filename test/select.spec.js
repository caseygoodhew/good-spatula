const expect = require('chai').expect;
const utils = require('./utils')();
const _select = require('../src/select');

describe('Test that select', function() {
    it('succeeds with a single dom', function() {
        const select = _select(utils.mockSpatula, utils.defaultDom);
        const result = select('.player-one');

        expect(result.isSpatula).to.be.true;
        const item = result.getItem();
        expect(item.length).to.equal(1);
        expect(item[0]).to.deep.equal(utils.defaultDom().children[0]);
    });

    it('succeeds a dom array', function() {
        const select = _select(utils.mockSpatula, () => [utils.defaultDom(), utils.defaultDom()]);
        const result = select('.player-one');

        expect(result.isSpatula).to.be.true;
        const item = result.getItem();
        expect(item.length).to.equal(2);
        expect(item[0]).to.deep.equal(utils.defaultDom().children[0]);
        expect(item[1]).to.deep.equal(utils.defaultDom().children[0])
    });

    it('succeeds with an empty dom array', function() {
        const select = _select(utils.mockSpatula, () => []);
        const result = select('.player-one');

        expect(result.isSpatula).to.be.true;
        const item = result.getItem();
        expect(item.length).to.equal(0);
    });

    it('succeeds with a undefined', function() {
        const select = _select(utils.mockSpatula, () => {
            return;
        });
        const result = select('.player-one');
        expect(result).to.be.undefined;
    });
});