function countBs(str) {
    var countOfB = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'b') {
            countOfB++
        }
    }
    return countOfB
}
console.log(countBs('rnfdnbdfdbdb'));