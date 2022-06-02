function hervirAgua(){
    return new Promise((resolve,reject)=>{   
        setTimeout(() => {
            reject();
            console.log(`El agua esta lista`);    
        }, 2000);     
        
    })
}
async function agregarIngredientes(){
    console.log(`Poner olla en el fogón`);
    try {
        await hervirAgua();    
    } catch (error) {
        console.error('Falló la función')
    }
    
    console.log('Agregar ingredientes');
}
function pelarPapa(){
console.log(`Lista la papa`);
}
 function picarCarne(){
    console.log(`Lista la carne`);
 }
 function aderezar(){
    console.log(`Listo el aderezo`);
 }

 agregarIngredientes()
 pelarPapa()
 picarCarne()
 aderezar()