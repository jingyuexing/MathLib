/**
 * 
 * @param x inputValue
 * @return number 0 to 1
 */
function sigmoid(x:number):number{
    return 1/(1+Math.E**(-x));
}
export default sigmoid;