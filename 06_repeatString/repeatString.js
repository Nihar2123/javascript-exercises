const repeatString = function(str, num) {
    if(num < 0) return 'ERROR';
    let strAns = '';
    while(num--){
        strAns += str;
    }
    return strAns;
};

// Do not edit below this line
module.exports = repeatString;
