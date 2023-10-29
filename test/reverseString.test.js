const reverseString = require('./reverseString');
describe('Test cases for Reversing a String', () => {
    test('should reverse Esther', () => {
        let string = 'Esther';
        let actual = 'rehtsE';
        expect(reverseString(string)).toBe(actual)
    })
    test('should reverse Dominic', () => {
        let string = 'Dominic';
        let actual = 'cinimoD';
        expect(reverseString(string)).toBe(actual)
    })
})

