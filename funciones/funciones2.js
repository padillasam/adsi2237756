//NO TIENE PARAMETROS

const x=()=>"Hola";
console.log(x());
//TIENE SOLO UN PARAMETRO
const y=nombre=>`Hola ${nombre}`;
console.log(y("Pedro"));

//MAS DE UN PARAMETRO
const z=(nombre,apellido)=>`Hola ${nombre} ${apellido}`;
console.log(z("Pedro","Perez"));

//CONDICIONAL TERNARIO
var a=10,b=100

if(a>b)
console.log("a es mayor")
else 
console.log("b es mayor")

a==b ? console.log("a es mayor") : console.log("b es mayor")

//flecha y ternario
var p=10,q=3
p%q==0||q%p==0?console.log("Son factor"):console.log("No son factor")

const rta=(p,q)=>p%q==0||q%p==0?"Son factor":"No son factor"


console.log(rta(3,2));









