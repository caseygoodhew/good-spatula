const expect = require('chai').expect;
const utils = require('./utils')();
const _map = require('../src/map');

describe('Test that map', function() {
    it('succeeds with an empty array', function() {
        const map = _map(utils.mockSpatula, () => []);

        var count = 0;
        const result = map((x, i) => {
            return count++;
        });

        expect(count).to.equal(0);
        expect(result).to.deep.equal([]);
    });

    it('succeeds with a single element', function() {
        const el = utils.defaultDom();
        const map = _map(utils.mockSpatula, () => el);

        var count = 0;
        const result = map((x, i) => {
            expect(x.isSpatula).to.be.true;
            expect(x.getItem()).to.equal(el);
            return count++;
        });

        expect(count).to.equal(1);
        expect(result).to.deep.equal([0]);
    });

    it('succeeds with multiple elements', function() {
        const children = utils.defaultDom().children;
        const map = _map(utils.mockSpatula, () => children);

        var count = 0;
        const result = map((x, i) => {
            expect(x.isSpatula).to.be.true;
            expect(x.getItem()).to.equal(children[i]);
            return count++;
        });

        expect(count).to.equal(children.length);
        expect(result).to.deep.equal([0, 1]);
    });
});