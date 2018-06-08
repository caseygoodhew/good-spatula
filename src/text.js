const _ = require('lodash');

module.exports = (spatula, getDom) => () => {
    const walker = (els) => {

        const result = [];

        debugger;

        _.castArray(els || getDom()).forEach(el => {
            if (el.type === 'text') {
                result.push(el.data);
            } else if (el.children && el.type !== 'comment' && el.tagName !== 'script' && el.tagName !== 'style') {
                result.push(walker(el.children));
            }
        })

        return _.flatten(result);
    }

    return _.flatten(walker()).join('');
}