const {
    numberDoubler,
    stringRepeater,
    makeDivisible
} = require('./main.js');

describe('numberDoubler', () => {
    it('should double numbers', () => {
        expect(numberDoubler(2)).toBe(128);
        expect(numberDoubler(1)).toBe(128);
        expect(numberDoubler(26)).toBe(104);
        expect(numberDoubler(51)).toBe(102);
    });
});

describe('stringRepeater', () => {
    it('should repeat strings', () => {
        expect(stringRepeater('abc')).toBe('abcabcabcabc');
        expect(stringRepeater('a')).toBe('aaaaaaaaaa');
        expect(stringRepeater('hotdog')).toBe('hotdoghotdog');
    });
});

describe('makeDivisible', () => {
    it('should add one to x until it is divisible by y', () => {
        expect(makeDivisible(9, 1)).toBe(9);
        expect(makeDivisible(9, 2)).toBe(10);
        expect(makeDivisible(11, 3)).toBe(12);
        expect(makeDivisible(10, 3)).toBe(12);
        expect(makeDivisible(5, 4)).toBe(8);
        expect(makeDivisible(16, 5)).toBe(20);
    });
});