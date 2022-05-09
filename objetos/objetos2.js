class Libro{
constructor(titulo, editorial){    
    this._titulo=titulo;
    this._editorial=editorial
}
get titulo(){
    return this._titulo;
}
set titulo(titulo){
    this._titulo=titulo;
}

infoLibro(){
   return `el libro ${this._titulo} es de la editorial ${this._editorial}`
}

// setTitulo(titulo){
//     this._titulo=titulo;
// }
}

var lib1=new Libro();
var lib2=new Libro("la voragine","planeta");
console.log(lib1);
console.log(lib2);
console.log(lib2.titulo);//se llama el getter

//setter forma antgüa
//lib2.setTitulo("nuevo titulo");
//setter usando palabra reservada set
lib2.titulo="La voragine recargada"; //se llama el setter
//lib2.editorial="Magisterio"

//console.log(lib2.titulo);
console.log(lib2.infoLibro());
//console.log(typeof(lib1));