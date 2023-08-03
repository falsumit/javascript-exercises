const reverseString = function(oldString) {
    if (oldString === '') {
        return ''
    }
    let stringArray = oldString.split("");
    stringArray.reverse();
    let newString = stringArray.join("");
    return newString
};
// Do not edit below this line
module.exports = reverseString;
