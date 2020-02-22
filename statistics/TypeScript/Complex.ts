class Complex{
  real:number;
  img:number;
  constructor(real:number,img:number){
    this.real = real;
    this.img = img;
  }
  public add(a:Complex){
    return new Complex(a.real+this.real,a.img+this.img);
  }
  public mult(a:Complex){
    return new Complex(a.real-this.real,a.img-this.img);
  }
  public product(){
    
  }
}
export default {Complex};