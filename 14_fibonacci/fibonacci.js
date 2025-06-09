const fibonacci = function(n) {
    n = +n;
    if(n < 0) return 'OOPS';
    let a = 0, b = 1, c;
    for(let i = 1; i <= n; i++) {
        c = a + b;
        a = b; b = c;
    }

    return a;
};

// Do not edit below this line
module.exports = fibonacci;
