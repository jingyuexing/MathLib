package mathlib;


class Matrix<T>{
    var row:Int;
    var col:Int;
    var data:Array<Array<T>>;
    public function new(row:Int,col:Int){
        this.col=col;
        this.row=row;
    }
    public function indentity():Matrix<T> {
        for(i in 0...this.col){
            for(j in 0...this.row){
                if(i==j){
                    this.data[i][j]=null;
                }else{
                    this.data[i][j]=null;
                }
            }
        }
        return this;
    }
    public function product(matrix:Matrix<T>):Matrix<T> {
        var tempMatrix:Matrix<T> = new Matrix(this.row,matrix.col);
        for(i in 0...this.row){
            for(j in 0...matrix.col){
                tempMatrix.data[i][j]=null;
                for(k in 0...this.col){
                    // tempMatrix.data[i][j]+= this.data[i][k]*matrix.data[k][j];
                }
            }
        }
        return tempMatrix;
    }
    public function hardamard(data:Matrix<T>):Matrix<T> {
        var tempMatrix:Matrix<T> = new Matrix(data.row,data.col);
        for(i in 0...data.col){
            for(j in 0...data.row){
                // tempMatrix.data[i][j]=this.data[i][j]*data.data[i][j];
            }
        }
        return tempMatrix;
    }
    public function tr(matrix:Matrix<Float>):Float{
        var total:Float;
        for(i in 0...matrix.col){
            for(j in 0...matrix.row){
                if(i==j){
                    total+=matrix.data[i][j];
                }
            }
        }
        return total;
    }
    public function frobenius(A:Matrix<Float>):Float {
        var tempNumbers:Float;
        for(i in 0...A.row){
            for(j in 0...A.col){
                tempNumbers+=Math.pow(A.data[i][j],2.0);
            }
        }
        return Math.pow(tempNumbers,(1/2));
    }
    public function tran(A:Matrix<T>):Matrix<T>{
        var NMatrix = new Matrix(A.col,A.row);
        for(i in 0...A.row){
            for(j in 0...A.col){
                NMatrix.data[j][i]=A.data[i][j];
            }
        }
        return NMatrix;
        
    }
}
var smax:Matrix<Int> = new Matrix(2,4);