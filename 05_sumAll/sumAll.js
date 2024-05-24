const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR"
    } else if (a < 0 || b < 0){
        return "ERROR"
    }


        let total = 0;
        if(a < b){
            for(let i = a; i <= b; i++){
                total += i;
            } 
        } else {
            for(let i = b; i <= a; i++){
                total += i;
            }
        }
        return total;
};

// Do not edit below this line
module.exports = sumAll;
