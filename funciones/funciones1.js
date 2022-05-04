function saludo(nombre,apellido){
    return `Hola ${nombre} ${apellido}`;
}


function saludo(nombre){
    return `Hola ${nombre}`;
}

var s=" Gusto saludar ";
s=saludo("Maria","Rodriguez")+s;

console.log(s);

function saludo(){
    return `Hola`;
}

const x=function(){
    return "Hola";
}
console.log(x());

