package com.mathlib;


class Complex<T extends Number>{
  T real,img;
  Complex(T real,T img){
    this.real = real;
    this.img = img;
  }
  public Complex<T>  add(Complex<T> a){

    return new Complex(this.real +a.real,this.img+a.img);
  }
  public Complex<T> mul(Complex<T> a){
    return new Complex(this.real-a.real, this.img-a.img);
  }
}
