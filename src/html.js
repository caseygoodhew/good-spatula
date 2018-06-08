const _serialize = require('dom-serializer');

module.exports = (spatula, getDom) => () => {
    return _serialize(spatula.getDom());
}