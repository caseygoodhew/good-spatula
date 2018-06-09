const expect = require('chai').expect;
const utils = require('./utils')();
const _forEach = require('../src/forEach');

describe('Test that forEach', function() {
    it('succeeds with an empty array', function() {
        const forEach = _forEach(utils.mockSpatula, () => []);

        var count = 0;
        const result = forEach((x, i) => {
            return count++;
        });

        expect(count).to.equal(0);
        expect(result).to.be.undefined;
    });

    it('succeeds with a single element', function() {
        const el = utils.defaultDom();
        const forEach = _forEach(utils.mockSpatula, () => el);

        var count = 0;
        const result = forEach((x, i) => {
            expect(x.isSpatula).to.be.true;
            expect(x.getItem()).to.equal(el);
            return count++;
        });

        expect(count).to.equal(1);
        expect(result).to.be.undefined;
    });

    it('succeeds with multiple elements', function() {
        const children = utils.defaultDom().children;
        const forEach = _forEach(utils.mockSpatula, () => children);

        var count = 0;
        const result = forEach((x, i) => {
            expect(x.isSpatula).to.be.true;
            expect(x.getItem()).to.equal(children[i]);
            return count++;
        });

        expect(count).to.equal(children.length);
        expect(result).to.be.undefined;
    });
});