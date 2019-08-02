import {Factorial as Fac} from "./Factorial"
function powerFactorial(x:number,n:number):number{

	return Fac(x+n-1)/Fac(x-1);
}
export {powerFactorial};