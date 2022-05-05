//hoisting
console.log(suma(1,2));

function suma(a,b,c){
    let r=a+b+c;
    return "suma de tres" +r;
}


function suma(a,b){
    return "suma de dos"+(a+b);
}

function suma(){
    return "sin parametros";
}


