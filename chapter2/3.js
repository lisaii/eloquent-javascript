function chessBoard(symbol, size) {
    var text = "";
    var str = "";
    for (var a = 0; a < size; a++) {
        str += symbol + " ";
    }
    for (var a = 0; a < size; a++) {

        if (a % 2 == 0) {
            text += " " + str + "\n";
        } else {
            text += str + "\n";
        }
    }
    return text;
}
//console.log(chessBoard("$", 10))
module.exports = chessBoard;
