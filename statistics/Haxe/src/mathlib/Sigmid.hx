package mathlib;

class Sigmid {
  public static function sigmoid(i:Float):Float {
    return 1/1+Math.pow(2.718281828459045,-i);
  }
}