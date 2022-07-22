package com.mathlib;

class Harmonic{
  public static double Harmonic(int n){
    double total =0.0;
    for(int i=0;i<n;i++){
      total+=(1/i);
    }
    return total;
  }
}