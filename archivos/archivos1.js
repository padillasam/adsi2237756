//fs es un modulo de node que me permite
//leer un archivo
 //console.log(__dirname);
// console.log(__filename);

const fs=require('fs');
const leer=(ruta,cb)=>{
    fs.readFile(ruta,(err,data)=>{
       // console.log(data.toString());
       cb(data.toString());
    })
}
//leer con ruta absoluta
 //leer(__dirname+'/animals.json',console.log)
 //leer con ruta relativa
 leer('./archivos/animals.json',console.log)

 const fs=require('fs');
 let texto='Adsi soacha 2022';

 function escribir(ruta,contenido,cb){
    //fs.writeFile(ruta,contenido,(err)=>{
    fs.appendFile(ruta,contenido,(err)=>{
       if(err){
           console.error('no se escribió')
       }
       else console.log('se escribió correctamente')
    });
}
escribir(__dirname+'/archivo2.txt',texto,console.log);
