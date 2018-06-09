const expect = require('chai').expect;
const utils = require('./utils')();
const parse = require('../src/parse');

describe('Test that parse', function() {
    it('succeeds with undefined', function() {
        expect(parse()).to.deep.equal([]);
    });

    it('succeeds with an empty string', function() {
        expect(parse('')).to.deep.equal([]);
    });

    it('succeeds with an empty array', function() {
        expect(parse([])).to.deep.equal([]);
    });

    it('succeeds with a string', function() {
        const result = parse('Mario');

        expect(result.length).to.equal(1);
        expect(result[0].data).to.equal('Mario');
        expect(result[0].type).to.equal('text');
        expect(result[0].next).to.be.null;
        expect(result[0].prev).to.be.null;
        expect(result[0].parent).to.be.null;
        //expect(parse('Mario')).to.deep.equal([]);
    });

    it('succeeds with markup', function() {
        const result = parse('<x>Mario</x>');
        expect(result.length).to.equal(1);
        expect(result[0].type).to.equal('tag');
        expect(result[0].name).to.equal('x');
        expect(result[0].next).to.be.null;
        expect(result[0].prev).to.be.null;
        expect(result[0].parent).to.be.null;
        expect(result[0].attribs).to.deep.equal({});
        expect(result[0].children.length).to.equal(1);
        expect(result[0].children[0].data).to.equal('Mario');
        expect(result[0].children[0].type).to.equal('text');
        expect(result[0].children[0].next).to.be.null;
        expect(result[0].children[0].prev).to.be.null;
        expect(result[0].children[0].parent).to.exist;
    });

    it('succeeds with a dom element', function() {
        const dom = utils.defaultDom();
        const result = parse(dom);
        expect(result).to.equal(dom);
    });

    it('succeeds with a dom array', function() {
        const dom = [utils.defaultDom()];
        const result = parse(dom);
        expect(result).to.deep.equal(dom);
    });

    it('succeeds with an array of undefined', function() {
        expect(parse([])).to.deep.equal([]);
    });

    it('throws with a number', function() {
        expect(() => parse(42)).to.throw('Unable to determine content type');
    });

    it('throws with a function', function() {
        expect(() => parse(parse)).to.throw('Unable to determine content type');
    });
});