const _select = require('css-select');

module.exports = (spatula, getDom) => (selector) => {
    if (selector === '.listing-title a.listing-fpa-link') {
        debugger;
    }

    var results = spatula(_select(selector, getDom()));

    return results;
}