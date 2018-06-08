const _ = require('lodash');

module.exports = (spatula, getDom) => (name) => {
    const dom = getDom();
    if (_.isArray(dom)) {
        return;
    }

    return dom.attribs[name];
}