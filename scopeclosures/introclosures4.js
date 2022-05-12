function simulaclase(){
let atributo="sin iniciar";
    return{
        //setAtributo1:function(a){atributo=a},
        setAtributo:(a)=>atributo=a,        
        getAtributo:()=>atributo,
    }
}
const objeto=simulaclase();
console.log(objeto.getAtributo());
objeto.setAtributo("Fabiana");
console.log(objeto.getAtributo());