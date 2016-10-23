function mathmin(a, b) {
    if (a < b) {
        return a
    } else {
        return b
    }
}
//console.log(mathmin(3, 5))

function mathmax(a, b) {
    if (a < b) {
        return b
    } else {
        return a
    }
}
//console.log(mathmax(3, 5))

module.exports = {
    mathmin: mathmin,
    mathmax: mathmax
};
