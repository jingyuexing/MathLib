import {Summation} from "./Summation";
function exp(x:number):number{
    return Math.pow(Math.E,x);
}
function softmax([...value]:Array<number>):Array<number>{
    var softmaxValue:Array<number> = [];
    var cache:Array<number> = [];
    for(let x=0;x<value.length;x++){
        cache.push(exp(value[x]));
    }
    var total = Summation(cache);
    for(let x=0;x<value.length;x++){
        softmaxValue.push(exp(value[x])/total)
    }
    return softmaxValue;
}
export {softmax}