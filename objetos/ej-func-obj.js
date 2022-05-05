function Arreglo(vec){
this.vec=vec;
this.cuentaPar=function(){
    let cont=0;
    for (let i = 0; i < this.vec.length; i++) {
        if (this.vec[i]%2==0) {
            cont++;//cont+=1  cont=cont+1
        }        
    }
    return cont;
}
this.sumaImpar=function(){
    let sum=0;
    for (let i = 0; i < this.vec.length; i++) {
        if (this.vec[i]%2!=0) {
            sum+=this.vec[i];
        }        
    }
    return sum;
}
}

var v=[10,3,6,2,8,1,11];
var objeto=new Arreglo(v);
console.log(objeto.cuentaPar());
console.log(objeto.sumaImpar());
