//solo puede tener un parámetro
function prometedora(num){
    return new Promise((resolve,reject)=>{
        resolve(num); 
        //reject(new Error('Hubo error'));               
    })
}
//..........................................
let param=100

function prueba(parametro){
    console.log(`Soy función externa ${parametro}`)
    return parametro;
}

function prueba2(){
    let vec=[2,3,4]
    console.log(vec);
}

prometedora(param)
    .then(prueba)    
    .then(prueba)    
    .then(prueba)    
    .then(prueba)    
    .then((num)=>console.log(`Se ejecuta el resolve ${num}`))    
    .then(prueba2)
    .catch((error)=>console.log(error));
    //.catch(new Error(()=>console.log('Ocurrio un error')));

//paréntesis funciones y parámetros
// function conParametros(num){
// console.log(`${num} es un parámetro`);
// }

// conParametros(123,678,78);
