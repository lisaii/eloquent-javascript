function power(base, exponent) {
    var result = 1;
    if (exponent == 0) {
        return result;
    }
    else {
        result = base * power(base, exponent - 1);
        return result;
    }
}


console.log(power(2, 3))