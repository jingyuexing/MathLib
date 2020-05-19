package mathlib;

class Mathlib {
  public static function mean(data:Array<Float>):Float{
    var total:Float;
    for(i in 0...data.length){
      total+=data[i];
    }
    return total/data.length;
  }
  public static function covariance(a:Array<Float>,b:Array<Float>):Float {
    var total:Float=0.0;
    if (a.length == b.length){
      var m_a = mean(a);
      var m_b:Float = mean(b);
      for(i in 0...a.length){
        total+=(a[i]-m_a)*(b[i]-m_b);
      }
    }
    return total/a.length;
  }
  public static function gammer() {
    
  }
  public static function summation(data:Array<Float>):Float {
    var total:Float = 0.0;
    for(i in 0...data.length){
      total+=data[i];
    }
    return total;
  }
  public static function softmax(value:Array<Float>):Array<Float> {
    var softMaxValue:Array<Float>;
    var cache:Array<Float>;
    for(i in 0...value.length){
      cache.push(exp(value[i]));
    }
    var total:Float = summation(cache);
    for(i in 0...value.length){
      softMaxValue.push(exp(value[i])/total);
    }
    return softMaxValue;
  }
  public static function sigmoid(x:Float) {
    return 1/(1+Math.pow(Math.exp(1.0),-x));
  }
  public static function exp(Num:Float):Float {
    return Math.exp(Num);
  }
  public static function variance(data:Array<Float>):Float {
    var mean = mean(data);
    var total:Float = 0.0;
    for(i in 0...data.length){
      total+=Math.pow(data[i]-mean,2);
    }
    return total;
  }
  public static function quantilePlot() {
    
  }
}