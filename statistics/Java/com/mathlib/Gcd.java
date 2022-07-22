package com.mathlib;

class Gcd{
  public static double Gcd(double p,double q){
    if (q==0) return p;
    double r  = p%q;
    return Gcd(q,r);
  }
}