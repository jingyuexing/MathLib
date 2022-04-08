import { Matrix } from "./Matrix";

interface Point {

}



export class AdjacencyMatrix extends Matrix {
    points: Point[];
    /**
     * 创建邻接矩阵
     * @param {Point[]} ...pointGroup 点集合
     */
    constructor([...pointGroup]: Point[]) {
        super(pointGroup.length, pointGroup.length)
        this.points = pointGroup;
    }
    /**
     * 为矩阵添加邻接矩阵数据
     * @param {number[]} ...point       节点集
     * @param {boolean} haveBorders 是否是有边的 默认为 false
     */
    push([...point]: number[], haveBorders: boolean = false) {
        let x = point[0];
        let y = point[1];
        if (haveBorders) {
            this.data[x][y] = 1
        } else {
            this.data[x][y] = 0
        }
    }
    /**
     * 生成G图的补图的邻接矩阵
     */
    complement() {
        for (let i = 0; i <= this.data.length; i++) {
            for (let j = 0; i <= this.data.length; i++) {
                if (i == j) {
                    this.data[i][j] = 0;
                } else {
                    this.data[i][j] = 1 - this.data[i][j];
                }
            }
        }
    }
    /**
     * 求一个结点的总度数
     * @param {number}  point    [description]
     * @param {Boolean} isVector =             false [description]
     */
    deg(point: number, isVector = false){
        return this.degIn(point,isVector)+this.degOut(point,isVector);
    }
    /**
     * 邻接矩阵计算出度
     * @param {number} point 第i个结点
     * @param {boolean} isVector 是否是有向图
     */
    degOut(point: number, isVector = false) {
        let deg = 0;
        if (isVector) {
            // 如果是有向图
            for(let i=0;i<this.data.length;i++){
                deg += this.data[i][point]
            }
        } else {
            for(let i=0;i<this.col;i++){
                deg += this.data[i][point]+this.data[i][i];
            }
        }
        return deg;
    }
    /**
     * 邻接矩阵计算入度
     * @param {} point 第i个结点
     * @param {boolean} isVector 是否是有向图
     */
    degIn(point: number, isVector = false) {
        let deg = 0;
        if (isVector) {
            for(let i=0;i<this.data.length;i++){
                deg += this.data[point][i];
            }
        } else {
            for (let i = 0; i < this.data.length; i++) {
                deg += this.data[point][i] + this.data[i][i];
            }
        }
        return deg;
    }
}
