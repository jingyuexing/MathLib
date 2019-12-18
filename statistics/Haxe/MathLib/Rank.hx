class Rank {
    var data:Array<Float>;
    public function new(args:Array<Float>) {
        this.data=args;
    }
    public function insert():Array<Float>{
        var key:Float,j:Int;
        var max = this.data.length;
        for (i in 2... max){
            key = this.data[i];
            j=i-1;
            while (i>0&&this.data[j]>key){
                this.data[j+1]=this.data[j];
                j=j-1;
                this.data[j+1]=key;
            }
        }
        return this.data;
    }
    public function bubbleSort():Array<Float>{
        var temp:Float;
        var max = this.data.length;
        for(i in 0...(max-1)){
            for(j in 0...(max-i)){
                if(this.data[j]>this.data[j+1]){
                    temp = this.data[j];
                    this.data[j]=this.data[j+1];
                    this.data[j+1]=temp;
                }
            }
        }
        return this.data;
    }
    public function quickSort(begin:Int,end:Int):Array<Float> {
        var i=begin,j=end,key=this.data[begin];
        while (i<j){
            while (i<j&&this.data[j]>=key) j--;
            if(i<j){
                this.data[i]=this.data[j];
                i++;
            }
            while (i<j&&this.data[i]<key) i++;
            if(i<j){
                this.data[j]= this.data[i];
                j--;
            }
        }
        this.data[i]=key;
        this.quickSort(begin,i-1);
        this.quickSort(i+1,end);
        return this.data;
    }
}