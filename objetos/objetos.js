//function Auto(marca="generico", modelo="no presenta"){
  function Auto(marca, modelo){
  this.marca = marca;
  this.modelo = modelo;  
  setMarca = function (marca){
     marca = marca;  
}
//this.infoauto=()=>"prueba función flecha";
  
this.infoauto=function(){
      return `Marca ${this.marca || "no tiene marca"} modelo ${this.modelo||"no tiene modelo"}`
  }

};
var a = new Auto("ford","explorer");
var b=new Auto();
console.log(a);
console.log(b);
console.log(a.infoauto());
console.log(b.infoauto());
// a.marca="renault";
// console.log(a);
// console.log(a.infoauto());
// console.log(a.infoauto2());




// var b=new Auto();
// a.setMarca("dodge");
// b.setMarca("hyunday")
// console.log(b.marca);
// a.marca = "kia";
// console.log(a.marca);
// console.log(a.infoauto());
// console.log(a.infoauto2());


