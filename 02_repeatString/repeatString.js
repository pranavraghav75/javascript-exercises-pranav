const repeatString = function(smth, count) {
    if(count < 0){
        return "ERROR"
    }
    let final = "";
    for(let i = 0; i < count; i++){
        final += smth;
    }
    return final;
};

// Do not edit below this line
module.exports = repeatString;
