const removeFromArray = function(arr, ...all) {
    for(const arg of all){
        for(let i = 0; i < arr.length; i++){
            if((typeof arr[i]) == (typeof arg)){
                if(arr[i] == arg){
                    arr.splice(i , 1);
                    i--;
                }
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
