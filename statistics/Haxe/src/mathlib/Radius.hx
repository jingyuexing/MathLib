package mathlib;

interface Point {
  var x:Float;
  var y:Float;
  var z:Float;
}

class Radius{
  var R:Float;
  var postion:Point;
  function new(r:Float,pos:Point) {
    this.R =r;
    this.postion = pos;
  }
  function area():Float{
    return Math.PI*this.R*this.R;
  }
  /**
    判断圆是否相切
  **/
  public function ex(s:Radius) {
    return Math.sqrt(Math.pow(this.postion.x-s.postion.x,2)+Math.pow(this.postion.y-s.postion.y,2)) == this.R+s.R;
  }
  /**
    判断圆是否相交
  **/
  public function b(s:Radius) {
    return Math.sqrt(Math.pow(this.postion.x-s.postion.x,2)+Math.pow(this.postion.y-s.postion.y,2)) < this.R+s.R;
  }
  /**
  判断圆是否是相离
  **/
  public function c(s:Radius) {
    return Math.sqrt(Math.pow(this.postion.x-s.postion.x,2)+Math.pow(this.postion.y-s.postion.y,2)) > this.R+s.R;
  }
  @:setter
  @:getter
  function setPoint(point:Point) {
    this.postion = point;
  }
}