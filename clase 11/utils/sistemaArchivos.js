//Modulo nativo del sistema de archivos de node.js

const filesystem = require('fs')


const crearTxt =(direccionYnombre, contenido) =>{
    /* crear un archivo de manera asincronuica
    
    writeFileSync:
    -direccion o path
    -info o data a escribir
    -ecnoding o codificacion de caracteres*/
    filesystem.writeFileSync('./archivos/'+direccionYnombre,contenido,'utf-8')
}
const leerTxt =() =>{
    const data = filesystem.readFileSync('./archivos/archivo.txt','utf-8')
    console.log('El contenido de archivo.txt es: '+ data)
}

const crearJSON =(direccionYnombre,contenido) =>{
    filesystem.writeFileSync('./archivos/json/'+ direccionYnombre +'.json', JSON.stringify(contenido),'utf-8')
    console.log('Archivo: ./ archivos/json/'+ direccionYnombre +'.json ha sifo creado con exito')
}

const leerJSON =(direccionYnombre)=>{
    const data = filesystem.readFileSync('./archivos/json/'+ direccionYnombre +'.json','utf-8')
    return JSON.parse(data)
    
}

module.exports = {
    crearTxt: crearTxt,
    leerTxt,
    crearJSON,
    leerJSON
}