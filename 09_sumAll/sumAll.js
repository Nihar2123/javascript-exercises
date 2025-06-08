const sumAll = function(a, b) {
    if(a < 0 || b < 0) return 'ERROR';
    if(a != Math.floor(a) || b != Math.floor(b)) return 'ERROR';
    if(typeof a != 'number' || typeof b != 'number') return 'ERROR';

    let sum = 0;
    if(a > b) [a, b] = [b, a];
    sum = b*(b + 1)/2 - a*(a - 1)/2;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
