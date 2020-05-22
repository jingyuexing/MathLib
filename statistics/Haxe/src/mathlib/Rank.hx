
package mathlib;

class Rank {
    public static function insert(data:Array<Float>):Array<Float>{
      var key:Float,j:Int;
      var max = data.length;
      for (i in 2... max){
          key = data[i];
          j=i-1;
          while (i>0&&data[j]>key){
              data[j+1]=data[j];
              j=j-1;
              data[j+1]=key;
          }
      }
      return data;
  }
    public static function bubbleSort(data:Array<Float>):Array<Float>{
      var temp:Float;
      var max = data.length;
      for(i in 0...(max-1)){
          for(j in 0...(max-i)){
              if(data[j]>data[j+1]){
                  temp = data[j];
                  data[j]=data[j+1];
                  data[j+1]=temp;
              }
          }
      }
      return data;
  }
    public static function quickSort(begin:Int,end:Int,data:Array<Float>):Array<Float> {
      var i=begin,j=end,key=data[begin];
      while (i<j){
          while (i<j&&data[j]>=key) j--;
          if(i<j){
              data[i]=data[j];
              i++;
          }
          while (i<j&&data[i]<key) i++;
          if(i<j){
              data[j]= data[i];
              j--;
          }
      }
      data[i]=key;
      quickSort(begin,i-1,data);
      quickSort(i+1,end,data);
      return data;
    }
    public static function merge(a:Array<Float>,b:Array<Float>):Array<Float> {
        var value:Array<Float>;
        return value;
    }
}