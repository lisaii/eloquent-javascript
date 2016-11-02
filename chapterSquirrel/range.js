function range(first, last) {
    let b = [];
    for (let a = first; a <= last; a++) {
        b.push(a)
    }
    return b
}
console.log(range(1, 10));
