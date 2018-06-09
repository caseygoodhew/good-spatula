const _ = require('lodash');

module.exports = (spatula, getDom) => function() {
    return _.castArray(getDom() || []).map(spatula).forEach(...arguments);
}