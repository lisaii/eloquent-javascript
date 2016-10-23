var min = require('./1.js').mathmin;
var max = require('./1.js').mathmax;

describe('lisai\'s minmaxs', () => {
    it('min returns minimal value', () => {
        expect(min(4,7)).toEqual(4);
        expect(min(7,7)).toEqual(7);
        expect(min(7,0)).not.toEqual(7);
    });
    it('max returns maximum value', () => {
        expect(max(4,7)).toEqual(7);
        expect(max(48,48)).toEqual(48);
        expect(max(7,0)).not.toEqual(0);
    });
});
