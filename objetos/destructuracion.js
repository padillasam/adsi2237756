const literal={
    nombre:'Martha',
    apellido:'Suarez',
    funcion:()=>{
        return `soy una función ${literal.nombre}` 
    },    
}
//console.log(literal.funcion())
//const {nombre,apellido,funcion}=literal;
const{apellido,nombre}=literal
const {funcion}=literal
console.log(nombre)
console.log(apellido)
console.log(funcion())


