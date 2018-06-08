module.exports = (spatula, getDom) => function() {
    return spatual.getDom().map(spatula).map(...arguments);
}