const removeFromArray = function(arr, ...values) {
    // for(let val of values){
    //     for (let i = 0; i < arr.length; i++){
    //         if (arr[i] === val){
    //             arr.splice(i, 1);
    //             i--;
    //         }
    //     }
    // }

    //return arr;

    return arr.filter(val => !values.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
