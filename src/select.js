const _select = require('css-select');

module.exports = (spatula, getDom) => (selector) => {
    const dom = getDom();
    return dom ? spatula(_select(selector, dom)) : undefined;
}