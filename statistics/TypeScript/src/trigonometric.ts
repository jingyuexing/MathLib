/**
 * 三角函数
 */
function trigonometric(x:number,y:number):Object{
	let r:number = Math.sqrt(x*x)+Math.sqrt(y*y);
	let sin,//正弦函数
		cos,//余弦函数
		tan,//正切函数
		cot,//
		sec,
		csc;
	return {};
}
class tri{
	x:number;
	y:number;
	r:number;
	constructor(x:number,y:number){
		this.x=x;
		this.y=y;
		this.r=Math.sqrt(x*x)+Math.sqrt(y*y);
	}
	sin(){
		return this.y/this.r;
	}
	cos(){
		return this.x/this.r;
	}
	tan(){
		return this.y/this.x;
	}
	cot(){
		return this.x/this.y;
	}
	sec(){
		return this.r/this.x;
	}
	csc(){
		return this.r/this.y;
	}
	pointXY(x:number,y:number){
		let new_x:number = x-this.x;
		let new_y:number=y-this.y;
		let new_r:number=Math.sqrt(new_x*new_x)+Math.sqrt(new_y*new_y);
		return {x:new_x,y:new_y,r:new_r};
	}
	/**
	 * sin^2_X+cos^2_x=1
	 */
}