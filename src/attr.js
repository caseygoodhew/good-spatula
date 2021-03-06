const _ = require('lodash');

module.exports = (spatula, getDom) => (name) => {
    const dom = getDom();

    if (_.isArray(dom)) {
        return dom.map(x => _.isNil(x.attribs) ? undefined : x.attribs[name]);
    }

    return dom.attribs[name];
}