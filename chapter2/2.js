function doFizzBuzz(i) {
    if (i % 15 == 0) {
            return "fizzbuzz";
        }
        else if (i % 3 == 0) {
            return "fizz";
        }
        else if (i % 5 == 0) {
            return "buzz";
        }
        else {
            return i;
        }
}
//
// for (var i = 1; i < 101; i++) {
//     console.log(doFizzBuzz(i));
// }

module.exports = doFizzBuzz;
