const _htmlparser = require('htmlparser2');
const _ = require('lodash');

module.exports = (content) => {
    if (!content) {
        return [];
    }

    if (typeof content === 'string' || Buffer.isBuffer(content)) {
        return _htmlparser.parseDOM(content, {
            withDomLvl1: true,
            normalizeWhitespace: false,
            xmlMode: false,
            decodeEntities: true
        })
    }

    const obj = _.isArray(content) ? content[0] : content;

    if (!obj) {
        return [];
    }

    if (obj.tagName && obj.nodeType) {
        return content;
    }

    throw new Error('Unable to determine content type');
}