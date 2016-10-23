var chessBoard = require('./3.js');

describe('lisai\'s chessboard', () => {
    it('it build a chessboard with a pridefined size', () => {
        expect(chessBoard('#',3)).toEqual(' # # # \n# # # \n # # # \n');
        expect(chessBoard('@',3)).toEqual(' @ @ @ \n@ @ @ \n @ @ @ \n');
    });
});
