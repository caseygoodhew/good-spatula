const _attr = require('./attr');
const _forEach = require('./forEach');
const _html = require('./html');
const _map = require('./map');
const _parse = require('./parse');
const _select = require('./select');
const _text = require('./text');

const spatula = function(input) {

    const parse = function(content) {
        const result = _parse(content);
        return result.length === 1 ? result[0] : result;
    }

    const dom = parse(input);

    const getDom = () => dom;

    const methods = {};
    methods.attr = _attr(spatula, getDom);
    methods.forEach = _forEach(spatula, getDom);
    methods.getDom = getDom;
    methods.html = _html(spatula, getDom);
    methods.map = _map(spatula, getDom);
    methods.select = _select(spatula, getDom);
    methods.text = _text(spatula, getDom);
    methods.toString = methods.text;

    const result = function() {
        return methods.select(...arguments);
    }

    for (var i in methods) {
        result[i] = methods[i];
    }

    return result;
}

module.exports = spatula;