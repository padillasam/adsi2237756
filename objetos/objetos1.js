var vec=[];
//objetos literales
var ob={
    nombre:"Maria Gomez",
    documento:123456,
    programa:"adsi",
    informacion:function(){
        return `${this.nombre} 
        estudia ${this.programa}
        y su identificación es ${this.documento}`
    },    
};

ob.ficha=2237756;
console.log(ob);

console.log(typeof(ob));
console.log(ob.informacion());


// var ob1={
//     marca:"Chevrolet",
//     modelo:"onix",
//     cilindraje:1400,
// }

var ob={
    nombre:"Maria Gomez",
    informacion:function(){
        return `${this.nombre}`;        
    },
  	funcionprueba:()=>"soy tipo flecha",
};
console.log(ob)

conarreglo={
    arreglo:[1,2,3],
    tam:function(){
        return this.arreglo.length;
    }
}
console.log(conarreglo.tam());