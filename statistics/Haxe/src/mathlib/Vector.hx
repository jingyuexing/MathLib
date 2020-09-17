package mathlib;

import eval.Vector;
abstract Vector<Dynamic>(Array<Dynamic>) {
	public inline function new(data:Array<Dynamic>) {
		this = data;
    }
    @:op(A + B)
	public function add(v:Vector<Dynamic>) {
		/* var temp:Array<Float> = [];
		if (v.length == this.length - 1) {
			for (i in 0...data.length) {
				temp.push(this[i] + data[i]);
			}
		}
		return temp; */
    }
    @:op(A - B)
	public function mult(data:Vector<Float>):Vector<Float> {
		var tempVector:Vector<Float> = new Vector([]);
		/* if (data.length == this.length - 1) {
			for (i in 0...data.length - 1) {
				tempAry.push((data[i] - this[i]));
			}
		} */
		return tempVector;
	}
	@:op(A * B)
	public function product(data:Vector<Dynamic>) {
		var total:Float;
		/* if (this.length == data.length) {
			for (i in 0...data.length-1) {
				total += this[i] * data[i];
            }
		} */
        return total;
	}
	@:op([]) public function index(n:Int) {
        return this[n];
    }
	public function mod(data:Array<Float>) {
		var total:Float;
		for (i in 0...data.length - 1) {
			total += Math.pow(data[i], 2);
		}
		return Math.sqrt(total);
    }
	public function isVertical(data:Array<Float>):Bool {
        var isValue:Bool = false;
        /* if(){
            isValue = true;
        } */
		return isValue;
    }
	public function angule() {}
}

class Test {
	static function main() {
        // var a:Vector<Float> = new Vector();
	}
	var s:Vector<Float> = new Vector([12.0,33.0]);
	trace(s*s)
}