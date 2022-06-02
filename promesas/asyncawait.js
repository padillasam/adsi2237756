// const flecha=async()=>new Promise((resolve,reject)=>{
// })
 function promesa(){
    return new Promise((resolve,reject)=>{
        console.log('Desde la función promesa')
        resolve();
    })
}
 function prueba1(){
    console.log('soy prueba1');
}
 function prueba2(){
    console.log('soy prueba2');
}
function prueba3(){
    console.log('soy prueba3');
}

async function main(){
promesa();
await prueba1();
await prueba2();
await prueba3();
}

main();
// promesa()
// .then(prueba1)
// .then(prueba2)
// .then(prueba3)
//.catch()