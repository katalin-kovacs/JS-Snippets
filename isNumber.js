// This snippet can be used to check whether a provided value is a number.

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

isNumber('1'); // false
isNumber(1); // true