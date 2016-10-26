function f(x) {
    if (x < 15) {
        f(x * 2)
    }
    console.log(x)

}


f(1)