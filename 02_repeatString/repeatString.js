const repeatString = function(heyString, testLoop) {
    if (heyString === '') {
        return heyString = ''
    } 
    
    for (let i = 0; i <= testLoop; i++) {
        heyString = 'hey'.repeat(i);
    } 
    
    if (testLoop >= 0) {
        return heyString
    } else if (testLoop < 0) {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;
