const checkStringIsBinary = require('./checkStringIsBinary');
const checkStringLength = require('./checkStringLength');
const sliceOffLastChar = require('./sliceOffLastChar');
//const ic = require('./InputCheckerModule.js')




// checkStringIsBinary test with non binary argument
test('checks string 1801 for non binary values; returns false', () => {
    expect(checkStringIsBinary("1801", errorMessages = [])).toBe(false);
    expect(errorMessages[0]).toBe(" Input may only contain 1s and 0s");
})

// checkStringIsBinary test with binary argument
test('checks string 11010110 for non binary values; returns true', () => {
    expect(checkStringIsBinary("11010110", errorMessages = [])).toBe(true);
    //expect(errorMessages).toBe(null);
})

test('checks string 11010110 is eight characters in length returns true', () => {
    expect(checkStringLength("11010110", errorMessages = [])).toBe(true);
    //expect(errorMessages).toBe(null);
})

test('passes string 0011, returns string 1100', () => {
    expect(sliceOffLastChar('0011').toBe('1100'));
})