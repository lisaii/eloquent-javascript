function buildTrengl(size) {
    var a = "#";
    var result = '';
    for (var i = 0; i <size; i++) {
        result += a + "\n"
        a = a + "#"
    }
    return result
}
//console.log(buildTrengl(15))

module.exports = buildTrengl;
