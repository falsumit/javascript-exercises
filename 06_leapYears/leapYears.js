const leapYears = function(year) {
    if (Number.isInteger(year / 100) && !Number.isInteger(year / 400)) {
        return false
    } else if (Number.isInteger(year / 4 || year / 400)) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
