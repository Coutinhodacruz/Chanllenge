const followsPattern = require('../src/followsPattern');
const expect = require("expect");

describe('followsPattern', () => {
    test('Input "abab" follows the pattern', () => {
        expect(followsPattern('abab', 'ab')).toBe(true);
    });

    test('Input "aba" does not follow the pattern', () => {
        expect(followsPattern('aba', 'ab')).toBe(false);
    });

    test('Input "abababab" follows the pattern', () => {
        expect(followsPattern('abababab', 'ab')).toBe(true);
    });

    test('Input "abac" does not follow the pattern', () => {
        expect(followsPattern('abac', 'ab')).toBe(false);
    });
});
