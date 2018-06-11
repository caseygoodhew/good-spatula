const _ = require('lodash');
const _select = require('css-select');

module.exports = (spatula, getDom) => (selector) => {
    const dom = getDom();
    if (_.isNil(dom)) {
        return undefined;
    }

    if (selector === '' || _.isNil(selector)) {
        return spatula(dom);
    }

    return spatula(_select(selector, dom));
}