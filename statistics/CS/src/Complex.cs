/*
* @Author: Jingyuexing
* @Date:   2020-12-04 11:16:34
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2020-12-04 11:21:03
*/
namespace Mathlib{
    class Complex{
        double real;
        double img;
        Complex(double real,double img){
            this.real = real;
            this.img = img;
        }
        public Complex add(Complex a){
            return new Complex(a.real+this.real,a.img+this.img);
        }
        public Complex mult(Complex a){
            return new Complex(a.real-this.real,a.img-this.img);
        }
    }
}
