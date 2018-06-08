module.exports = (spatula, getDom) => function() {
    return getDom().map(spatula).forEach(...arguments);
}