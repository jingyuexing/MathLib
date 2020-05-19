package mathlib;
typedef M = Array<Array<Float>>;
class Matrix<T> {
    var row:Int;
    var col:Int;
    var data:Array<Array<T>>;
    public function new(row:Int,col:Int,?data:Array<Array<T>>):Void{
        this.col=col;
        this.row=row;
        this.data = data;
    }
    /**
     * 
     * @return {Matrix} 
     */
    public function indentity():Matrix<T> {
        for(i in 0...this.col){
            for(j in 0...this.row){
                if(i==j){
                    this.data[i][j]=1.0;
                }else{
                    this.data[i][j]=0.0;
                }
            }
        }
        return this;
    }
    /**
     * 矩阵乘法
     * @param  matrix [description]
     * @return        [description]
     */
    public function product(matrix:Matrix<T>):Matrix<T> {
        var t:M;
        var tempMatrix = new Matrix(this.row,matrix.col,t);
        for(i in 0...this.row){
            for(j in 0...matrix.col){
                tempMatrix.data[i][j]=0.0;
                for(k in 0...this.col){
                    tempMatrix.data[i][j]+= this.data[i][k]*matrix.data[k][j];
                }
            }
        }
        return tempMatrix;
    }
    /**
     * [hardamard description]
     * @param  data [description]
     * @return      [description]
     */
    public function hardamard(data:Matrix<T>):Matrix<T> {
        var tempMatrix:Matrix<T> = new Matrix(data.row,data.col,[]);
        for(i in 0...data.col){
            for(j in 0...data.row){
                tempMatrix.data[i][j]=this.data[i][j]*data.data[i][j];
            }
        }
        return tempMatrix;
    }
    public function tr(matrix:Matrix<T>):Float {
        var total:Float=0.0;
        for(i in 0...matrix.col){
            for(j in 0...matrix.row){
                if(i==j){
                    total+=matrix.data[i][j];
                }
            }
        }
        return total;
    }
    /**
     * [frobenius description]
     * @param  A [description]
     * @return   [description]
     */
    public function frobenius(A:Matrix<T>) {
        var tempNumbers:Float=0.0;
        for(i in 0...A.row){
            for(j in 0...A.col){
                tempNumbers+=Math.pow(A.data[i][j],2.0);
            }
        }
        return Math.pow(tempNumbers,(1/2));
    }
    /**
     * [tran description]
     * @param  A [description]
     * @return   [description]
     */
    public function tran(A:Matrix<T>):Matrix<T>{
        var NMatrix = new Matrix(A.col,A.row,[]);
        for(i in 0...A.row){
            for(j in 0...A.col){
                NMatrix.data[j][i]=A.data[i][j];
            }
        }
        return NMatrix;
        
    }
}