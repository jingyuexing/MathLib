function mean(...num){
    "use strict";
    let total =0;
    for(let i=0;i<num.length;i++){
        total+=num[i];
    }
    return total/num.length;
}