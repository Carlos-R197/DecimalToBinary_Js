const convert = require('./convert')

describe('Test to convert base 10 numbers to base 2', () => {
    it('should convert base 10 numbers into base 2', () => {
        expect(convert(1)).toBe('1')
        expect(convert(5)).toBe('101')
    })
})