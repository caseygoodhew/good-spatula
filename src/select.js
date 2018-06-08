const _select = require('css-select');

module.exports = (spatula, getDom) => (selector) => {
    return spatula(_select(selector, getDom()));
}