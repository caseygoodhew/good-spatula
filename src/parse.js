const _htmlparser = require('htmlparser2');
const _ = require('lodash');

const parse = (content) => {

    if (!content) {
        return [];
    }

    if (_.isArray(content)) {
        return _(content.map(parse)).flatten().compact().value();
    }

    if (typeof content === 'string' || Buffer.isBuffer(content)) {
        return _htmlparser.parseDOM(content, {
            withDomLvl1: true,
            normalizeWhitespace: false,
            xmlMode: false,
            decodeEntities: true
        })
    }

    if (content.tagName && content.nodeType) {
        return content;
    }

    if (content.type && content.name) {
        return content;
    }

    if (content.type && content.data) {
        return content;
    }

    if (content.getDom) {
        return content.getDom();
    }

    throw new Error('Unable to determine content type');
}

module.exports = parse;