/*
* @Author: Jingyuexing
* @Date:   2020-12-04 10:27:40
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2020-12-04 11:15:23
*/


using System;

namespace Mathlib{
    class Mathlib{
        /**
         * 最大公约数
         * @param  {int} p
         * @param  {int} q      [description]
         * @return {int}     [description]
         */
        public static int gcd(int p,int q){
            if(q==0) return p;
            int r = p % q;
            return gcd(q, r);
        }

        /**
         * 平均值
         * @param  {Array<double>}  data   需要求平均值的数值
         * @return {double}   final      平均值
         */
        public static double mean(double[] data){
            return summation(data)/data.Length;
        }
        /**
         * 求和
         * @param  {double[]} data   数据
         * @return {double}        总和
         */
        public static double summation(double[] data){
            double total = 0;
            for(int i =0;i<data.Length;i++){
                total+=data[i];
            }
            return total;
        }
        /**
         * [softmax description]
         * @param  {[type]} double[] value         [description]
         * @return {[type]}          [description]
         */
        public static double[] softmax(double[] value){
            double[] softmax = null;
            double total = summation(value);
            for(int i =0;i<value.Length;i++){
                softmax[i] = sigmoid(Math.Exp(value[i]/total));
            }
            return softmax;
        }
        /**
         * [sigmoid description]
         * @param  {[type]} double value         [description]
         * @return {[type]}        [description]
         */
        public static double sigmoid(double value){
            return 1.0/(1.0+Math.Pow(Math.E, -value));
        }
        public static double median(){
            return 0;
        }
        /**
         * 计算信息熵
         * @param {Array<double>} argument 参数
         */
        public static double H(double[] argument){
            double total = 0;
            for(int i =0;i<argument.Length;i++){
                total += -argument[i]*Math.Log(argument[i],2);
            }
            return total;
        }
    }
}
