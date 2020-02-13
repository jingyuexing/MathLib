class Rank {
    var data:Array<Float>;
    /**
     * [new description]
     * @param  args<Float> [description]
     * @return             [description]
     */
    public function new(args:Array<Float>) {
        this.data=args;
    }
    /**
     * [insert description]
     * @return [description]
     */
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
    /**
     * bubbleSort 冒泡排序
     * @return 排序后的数组
     */
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
    /**
     * quickSort 快排
     * @param  begin [description]
     * @param  end   [description]
     * @return       [description]
     */
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