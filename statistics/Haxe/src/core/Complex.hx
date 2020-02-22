package core;
class Complex{
  var real:Float;
  var img:Float;
  public function new(real:Float,img:Float) {
    this.real = real;
    this.img = img;
  }
  public function addComplex(a:Complex) {
    return new Complex(a.real+this.real,a.img+this.img);
  }
  public function multComplex(a:Complex) {
    return new Complex(a.real+this.real,a.img+this.img);
  }
  public function productComplex(a:Complex) {
    return new Complex(a.real*this.real-a.img*this.img,a.real*this.real);
  }
}