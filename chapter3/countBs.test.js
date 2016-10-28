var countBs = require('./countBs.js');

describe('lisai\'s function of beans', () => {
    it('it counts the number of symbols in the string', () => {
        expect(countBs('ssssss#sooooo#qqq#aaa','#')).toEqual(3);
        expect(countBs('XXXsssssooXXXoooqqqaaaXXX','X')).toEqual(9);
        expect(countBs('%sssssss%ooooo%qqq%aaa','%')).not.toEqual(5);
    });
});