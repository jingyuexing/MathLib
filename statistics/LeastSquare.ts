import {Mean} from "./Mean";
interface Point{
    x:number;
    y:number;
}
/**
 * 最小二乘法
 * @param  {Array<number>} ...a [数据集]
 * @param  {Array<number>} ...b [数据集]
 * @param  {number}        n    [回归线取值范围]
 * @return {Array<any>}         [线性回归数据集]
 */
function LeastSquare([...a]:Array<number>,[...b]:Array<number>,n:number):Array<any>{
    if(a instanceof Array && b instanceof Array){
       let __x__ = Mean(a); //求得x的平均值
       let __y__ = Mean(b); //求得y的平均值
        if(a.length!=b.length){
            throw TypeError("两个数组数据不符合")
        }
        let total_1:number,total_2:number,_a_:number,_b_:number,y_:number,temp:Array<Point>;
        for(let i=0;i<a.length;i++){
            total_1= a[i]*b[i]-(a.length*__x__*__y__);
            total_2 = a[i]**2-(a.length*__x__**2); 
        }
        _b_=total_1/total_2;
        _a_ = __y__ - _b_*__x__;
        for(let j=1;j<n;j++){
            y_=_b_*j+_a_;
            temp.push({x:j,y:y_});
        }
        return temp;
    }else{
        throw TypeError("参数必须是数组类型数据");
    }
}
export {LeastSquare};