// function ahorro(dinero){
//     let capital=0;
//     capital=capital+dinero;
//     return capital;
// }
// console.log(ahorro(1000));
// console.log(ahorro(1000));
// console.log(ahorro(1000));

function ahorro(){
    let capital=0;
    function deposito(dinero){
        capital=capital+dinero;
        return capital;
    }
    return deposito
}

let miahorro=ahorro();
console.log(miahorro(1000));
console.log(miahorro(2000));
console.log(miahorro(3000));

// function acumular(aumento){
// let valor=0;
// valor=valor+aumento;
// return valor
// }
// console.log(acumular(10));
// console.log(acumular(10));
// console.log(acumular(10));

function contador(ini,incr){
    let inicio=ini;
    let inc=incr;
    return()=>{
    inicio=inicio+inc;
    return inicio;
    }
}


const cont=contador(0,100);
console.log(cont());//incremente cantidades iguales
console.log(cont());
console.log(cont());