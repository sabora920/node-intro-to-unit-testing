const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe ('fizzBuzzer', function(){

    it('`num` must be a number', function(){
        const normalCases = [
            {a: 'p', expected: '`num` must be a number'},
            {a: 'p', expected: '`num` must be a number'},
            {a: 'p', expected: '`num` must be a number'}
        ];

        normalCases.forEach(input => {
            (function() {
                fizzBuzzer(input.a)
            }).should.throw(Error);
        });
    });
    it('should replace numbers with fizzbuzz when numbers are divisible by 15', function(){
        const normalCases = [
            {a: 15, expected: 'fizz-buzz'},
            {a: 30, expected: 'fizz-buzz'},
            {a: 120, expected: 'fizz-buzz'}
        ];

        normalCases.forEach(input => {
            fizzBuzzer(input.a).should.equal(input.expected);
        });
    });
    it('should replace numbers with buzz when numbers are divisible by 5', function(){
        const normalCases = [
            {a: 10, expected: 'buzz'},
            {a: 1000000, expected: 'buzz'},
            {a: 200, expected: 'buzz'}
        ];

        normalCases.forEach(input => {
            fizzBuzzer(input.a).should.equal(input.expected);
        });
    });
    it('should replace numbers with fizz when numbers are divisible by 3', function(){
        const normalCases = [
            {a: 36, expected: 'fizz'},
            {a: 138, expected: 'fizz'},
            {a: 18, expected: 'fizz'}
        ];

        normalCases.forEach(input => {
            fizzBuzzer(input.a).should.equal(input.expected);
        })
    });
})