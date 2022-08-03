// var x;
// let x;
// console.log(x+x);
//engine V8
// var x='100';//prompt('Ingrese numero');
// x=parseInt(x);
// //let x;
// console.log(x+x);
//console.log(Math.random()*10);
//floor ceil
// var x=Math.round(Math.random()*100);
// console.log(x)
// if (x%5==0){
//     console.log('Si es multiplo de 5')
//     console.log(x*x);
// }

// var x=Math.round(Math.random()*100);
// console.log(x)
// if (x%2==0){
//     console.log('Es PAR')    
// }else{ 
// console.log('ES IMPAR')    
// }

var x=Math.round(Math.random()*100);
x=10;
console.log(x)
if (x>0){
    console.log('Positivo')    
}else if(x<0){ 
        console.log('negativo')    
     }else
     console.log('cero')    

// Calificaciones 
var nota = Math.random() * 4.9;
console.log(`su nota es : ${nota}`);

if (nota >= 4.5) {
  console.log("Excelente");
} else if (nota >= 4.0) {
  console.log("Sobresaliente");
} else if (nota >= 3.5) {
  console.log("Aceptable");
} else if (nota > 2.5) {
  console.log("Regular");
} else {
  console.log("Insuficiente");
}

//OPERADORES LOGICOS && || !
var x=true;//variable booleana
var y=false;//variable booleana

console.log(`negación de x ${!x}`)

console.log(`Expresion OR disyunción,  O ${x || y}`)
var caf=3.1;
var edad=15
console.log(`vota si es mayor que 18 ${!(edad<18)}`)
console.log(`Expresion OR disyunción,  O ${edad<=12 || edad>=80}`)
console.log(`Expresion AND CONJUNCIÓN,  Y ${caf>3.0 && caf<4.0}`)





