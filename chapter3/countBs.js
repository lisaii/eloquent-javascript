function countBs(str, symbol) {
    var countOfB = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === symbol) {
            countOfB++
        }
    }
    return countOfB
}
console.log(countBs('rnfdnbdf#3##33#dbd`    b', '#'));

module.exports = countBs;