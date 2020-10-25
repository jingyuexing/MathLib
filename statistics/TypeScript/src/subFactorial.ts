import {Factorial as Fac} from "./Factorial"
function subFactorial(x:number,n:number):number{
	return Fac(x)/Fac(x-n);
}
export {subFactorial}