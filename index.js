const reduceSum = function (key, obj) {
    return obj.reduce((n, item) => {
        return n + (item[key] ? item[key] : 0)
    }, 0)
}

module.exports = reduceSum;