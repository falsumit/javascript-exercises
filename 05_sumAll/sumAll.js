const sumAll = function(a, b) {
    if (a < 0 || b < 0 ||
        typeof a !== "number" || isNaN(a) || 
        typeof b !== "number" || isNaN(b)) {
        return 'ERROR'
    } else {
        let num = [a, b];
        num.sort(function(a, b){return a-b});
        let lowVal = num[0];
        let highVal = num[1];
        num.pop();

        for (let i = lowVal + 1; i <= highVal; i++) {
            num.push(i);
        }
        let result = num.reduce((accumulator, currentValue) => accumulator + currentValue);
        return result
    }
};

// Do not edit below this line
module.exports = sumAll;
