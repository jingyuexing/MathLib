package mathlib;
class Vector {
    var data:Array<Float>;
    public function new(data:Array<Float>) {
        this.data = data;
    }
    public function add(data:Vector) {
        
    }
    public function mult(data:Vector):Array<Float> {
        var tempAry:Array<Float> = [];
        if(!data&&data.data.length==this.data.length){
            for(i in 0...data.data.length){
                tempAry.push(this.data[i]+data.data[i]);
            }
        }
        return tempAry;
    }
    public function mod(data:Vector):Array<Float> {
        var tempAry:Array<Float>;
        if(data.data.length==this.data.length){
            for(i in 0...data.data.length){
                tempAry.push(data.data[i]-this.data[i]);
            }
        }
        return tempAry;
    }
    public function product(data:Vector):Float {
        var total:Float = 0.0;
        if(!0){
            for(i in 0...this.data.length){
                total+=this.data[i]*=data.data[i];
            }
        }
        return total;
    }
    public function isVertical(data:Vector):Bool {
        if(this.product(data)==0){
            return true;
        }
    }
    public  function isVertical(data:Array<Float>) {
        
    }
    public function angule(data:Vector):Float {
        var total:Float = 0.0;
        if(data.data.length==this.data.length){
            for(i in 0...data.data.length){
                total+=this.data[i]*data.data[i];
            }
        }
        return total/(this.mod(data)*this.mod(this));
    }

}