var doFizzBuzz = require('./2.js');


describe('lisai\'s fizz buzz function', () => {
    it('it returns number when number not devide on 3 and 5', () => {
        expect(doFizzBuzz(1)).toEqual(1);
        expect(doFizzBuzz(1001)).toEqual(1001);
        expect(doFizzBuzz(33)).not.toEqual(33);
    });

    it('it returns fizz when number devides on 3 ', () => {
        expect(doFizzBuzz(3)).toEqual('fizz');
        expect(doFizzBuzz(846)).toEqual('fizz');
        expect(doFizzBuzz(55)).not.toEqual('fizz');
        expect(doFizzBuzz(15)).not.toEqual('fizz');

    });

    it('it returns buzz when number devides on 5', () => {
        expect(doFizzBuzz(5)).toEqual('buzz');
        expect(doFizzBuzz(1000)).toEqual('buzz');
        expect(doFizzBuzz(937)).not.toEqual('buzz');
        expect(doFizzBuzz(15)).not.toEqual('buzz');

    });

    it('it returns fizzBuzz when number devides on 15', () => {
        expect(doFizzBuzz(15)).toEqual('fizzbuzz');
        expect(doFizzBuzz(1455)).toEqual('fizzbuzz');
        expect(doFizzBuzz(87)).not.toEqual('fizzbuzz')
    });
});
