//hoisting
function saludar(nombre,callback,callback1){
    setTimeout(() => {
        console.log(`Hola ${nombre}`);    
        callback(nombre,callback1);
        //callback1();
    }, 3000);
    
}
// function falsa(num){
// console.log(`el cuadrado es= ${num*num}`)
// }    

function hablar(nombre,callback){
    setTimeout(() => {
        console.log(`${nombre} bla bla bla`);    
        callback();
        // callback();
        // callback();
        // callback();
    }, 5000);
    
}
function despedirse(){
    setTimeout(() => {
        console.log('Hasta pronto');    
    }, 1000);
    
}

saludar("Martha",hablar,despedirse);

//saludar();
//hablar();
//despedirse();
