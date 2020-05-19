package mathlib;
private typedef M = Array<Array<Float>>;
class Matrix {
    var row:Int;
    var col:Int;
    var data:M;
    public function new(row:Int,col:Int):Void{
        this.col=col;
        this.row=row;
    }
    public function indentity():Matrix {
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
    public function product(matrix:Matrix):Matrix {
        var tempMatrix = new Matrix(this.row,matrix.col);
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
    public function hardamard(data:Matrix):Matrix {
        var tempMatrix:Matrix = new Matrix(data.row,data.col);
        for(i in 0...data.col){
            for(j in 0...data.row){
                tempMatrix.data[i][j]=this.data[i][j]*data.data[i][j];

            }
        }
        return tempMatrix;
    }
    public function tr(matrix:Matrix):Float {
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
    public function frobenius(A:Matrix) {
        var tempNumbers:Float=0.0;
        for(i in 0...A.row){
            for(j in 0...A.col){
                tempNumbers+=Math.pow(A.data[i][j],2.0);
            }
        }
        return Math.pow(tempNumbers,(1/2));
    }
    public function tran(A:Matrix):Matrix{
        var NMatrix = new Matrix(A.col,A.row);
        for(i in 0...A.row){
            for(j in 0...A.col){
                NMatrix.data[j][i]=A.data[i][j];
            }
        }
        return NMatrix;
        
    }
}