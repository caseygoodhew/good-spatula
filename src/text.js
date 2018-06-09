const _ = require('lodash');

const skip = {
    'comment': true,
    'meta': true,
    'script': true,
    'style': true
}

module.exports = (spatula, getDom) => () => {
    const walker = (els) => {

        const result = [];

        _.castArray(els || getDom() || '').forEach(el => {
            if (el.type === 'text') {
                result.push(el.data);
            } else if (el.children && !skip[el.type] && !skip[el.tagName]) {
                result.push(walker(el.children));
            }
        })

        return _.flatten(result);
    }

    return _.flatten(walker()).join('');
}