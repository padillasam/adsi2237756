const externa1=()=>{
    let msj=`soy función externa`;
    let interna=()=>`soy de la parte interna ${msj}`;    
    return interna;
}
const proof=externa1();
console.log(proof());

function externa(){
    //string templates
    let msj=`soy de la parte externa`;
    function interna(){
        return `soy de la parte interna ${msj}` 
    }
    return interna;
}

const prueba=externa();
console.log(prueba());



