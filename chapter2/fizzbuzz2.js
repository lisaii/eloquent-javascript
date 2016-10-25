function recallNumbers(number) {
    for (var i = 1; i < number; i++) {
        if (i % 3 != 0 && i % 5 != 0) {
            console.log(i)
        }
    }
}
recallNumbers(500)