function f(x) {
    if (x < 15) {
        f(x * 2)
    }
    return x;

}


console.log(f(1));

