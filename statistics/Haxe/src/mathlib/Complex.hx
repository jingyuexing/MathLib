package mathlib;
class Complex{
  var real:Float;
  var img:Float;
  public function new(real:Float,img:Float) {
    this.real = real;
    this.img = img;
  }
  // @:op(A + B)
  public function addComplex(a:Complex) {
    return new Complex(a.real+this.real,a.img+this.img);
  }
  // @:op(A - B)
  public function multComplex(a:Complex) {
    return new Complex(a.real+this.real,a.img+this.img);
  }
  // @:op(A * B)
  public function productComplex(a:Complex) {
    return new Complex(a.real*this.real-a.img*this.img,a.real*this.real);
  }
}
