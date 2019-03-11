
interface Vector{
    add(data:Vector):Array<number>;
    mult(data:Vector):Array<Number>;
    mod(data:Array<number>|Vector):number;
    product(data:number|Array<number>|Vector):number|Array<number>;
    vertical(dada:Vector|Array<number>):boolean
    angle(data:Vector|Array<number>):number;
}