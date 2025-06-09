const palindromes = function (str) {
    str = str.toLowerCase();
    let i = 0, j = str.length - 1;
    while(i < j){
        while(!((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= '0' && str[i] <= '9')) ){i++;}
        while(!((str[j] >= 'a' && str[j] <= 'z') || (str[j] >= '0' && str[j] <= '9')) ){j--;}
        if(i >= j) return true;
        if(str[i++] !== str[j--]) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
