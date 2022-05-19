//Hacer Sopa

function aguaHervida(control){
    return new Promise((resolve,reject)=>{            
        if (control) {
            setTimeout(() => {
                console.log(`Proceso de hervimiento de agua terminado`)        
                    resolve()
                },3000)        
        } else {
            reject(error);            
        }
        
    })   
}
function agregarIngredientes(){
    console.log(`Todos los ingredientes listos`)    
}
function picarCarne(){
    console.log('Lista la carne')
}
function pelarPapa(){
    console.log('Lista la papa')
}
 function lavarVerduras(){
    console.log('Listas las verduras')
}
 aguaHervida(false)
 .then(agregarIngredientes)
 .catch(()=>console.log('No hay GAS'))
 pelarPapa()
 lavarVerduras()
 picarCarne()
