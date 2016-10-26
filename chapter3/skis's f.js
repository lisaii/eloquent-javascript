function countNumbers(x) {
    var e = 0;
    if (x > 0 && x <= 7) {
        e = x * x - 2;
    }
    else if (x > 8) {
        e = (-4 + x) / (x * x);
    }
    else {
        e = 0
    }
    return e;
}
console.log(countNumbers(5))