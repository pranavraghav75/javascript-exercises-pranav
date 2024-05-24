const reverseString = function(smth) {
    let reverse = "";
    for(let i = smth.length - 1; i >= 0; i--){
        reverse += smth[i];
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
