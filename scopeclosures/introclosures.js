//Contexto de ejecución global = archivo .js

function a(){
    //contexto de ejecución local a la función
    let x=0;
return x;
}
()=>{
return x;
}
console.log(a());

let i;
for (i = 0; i < 10; i++) {
    //contexto de ejecución local al for 
    console.log(i)    
}
console.log(i);