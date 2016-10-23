var buildTrengl = require('./1.js');

describe('lisai\'s cycle', () => {
    it('it returns trengl with a pridefined size', () => {
        expect(buildTrengl(3)).toEqual('#\n##\n###\n');
    });
});
