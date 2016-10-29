const countNumbers = require('./skissf.js');


describe('skiss function', () => {
    it('it do the mathematical calculation if an imposed number greater than 0 and less than 7 ', () => {
        expect(countNumbers(1)).toEqual(-1);
        expect(countNumbers(0)).toEqual(0);
        expect(countNumbers(3)).not.toEqual(8);
    });
    it('it do the mathematical calculation if an imposed number greater than 8 ', () => {
        expect(countNumbers(10)).toEqual(0.06);
        expect(countNumbers(1065)).toEqual(0.0009354404990191541);
        expect(countNumbers(15)).not.toEqual(0.04888887778888889);
    });

    it('it shows 0 in other situations', () => {
        expect(countNumbers(-2)).toEqual(0);
        expect(countNumbers(-16546)).toEqual(0);
        expect(countNumbers(-367)).not.toEqual(3);
    });


});