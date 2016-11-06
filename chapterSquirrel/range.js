function range(first, last) {
    const b = [];
    for (let a = first; a <= last; a++) {
        b.push(a)
    }
    return b
}

function sum(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}
console.log(range(1,10).reduce((a,b) => (a+b)))
// console.log(sum(range(1, 10)));
