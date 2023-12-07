function checkStringLength(str, errorMessages) {
    let isEightLong = false;

    if (str.length == 8) {
        isEightLong = true;
    } else if ((str.length > 8 || str.length < 8) && str !== null) {
        errorMessages.push(" " + "Input must be eight characters long");
    }

    return isEightLong;
}

module.exports = checkStringLength;