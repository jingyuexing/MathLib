long int Factorial(int n){
    long int total=1;
    for(int i=1;i<=n;i++){
        total*=i;
    }
    return total;
}