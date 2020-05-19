<<<<<<< HEAD
package mathlib;
class Rank {
    /**
     * [insert description]
     * @return [description]
     */
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
    /**
     * bubbleSort 冒泡排序
     * @return 排序后的数组
     */
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
    /**
     * quickSort 快排
     * @param  begin [description]
     * @param  end   [description]
     * @param  data  需要参加排序的数据
     * @return       [description]
     */
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
    /**
     * 归并排序
     * @param  data Array<Float> 数据
     * @param  p           [description]
     * @param  q           [description]
     * @param  r           [description]
     * @return             归并排序后的数据
     */
    public static function mergeSort(data:Array<Float>,p,q,r):Array<Float> {
        var m1 = q-p+1;
        var m2 = r-q;
        var i = 0;
        var j = 0;
        //创建数组Array
        //L长度为n1+1   R长度为 n2+1
        var left:Array<Float> = [];
        var right:Array<Float> = [];
        for(i in 1...m1){
            left[i] = data[p+i-1];
        }
        for(j in 1...m2){
            right[j] = data[q+i];
        }
        left[m1+1] = null;
        right[m2+1]=null;
        i=1;
        j=1;
        for(k in p...r){
            if(left[i]<=right[j]){
                data[k] = left[i];
                i+=1;
            }else{
                data[k]=right[j];
                j+=1;
            }
        }
        return data;
=======

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
>>>>>>> dev
    }
}