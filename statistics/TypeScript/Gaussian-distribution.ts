import {Gaussiandistribution as GD} from "./Gaussian-distribution";
import {Variance as Vc} from "./Variance";
import {StandardDeviation as SD} from "./Standard-Deviation";
/**
 * 高斯正态分布
 */

export class Gaussiandistribution{
	E:number;
	PI:number;
	constructor(){
		this.E = Math.E;
		this.PI = Math.PI;
	}
}