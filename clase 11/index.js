
// const moduloCalculosVarios= require('./utils/calculosVarios.js')
// console.log(moduloCalculosVarios)

// const {calcularPrecioConIva}= require('./utils/calculosVarios.js')

// const {formatearPrecio}= require('./utils/formatos.js')


// //const calculosVarios = require('./utils/calculosVarios.js')
// const precio_vaso =20

// const objeto_iva = calcularPrecioConIva(precio_vaso)
// console.log(objeto_iva)
// console.log('El iva del vaso es: '+ formatearPrecio(objeto_iva.iva))

/*Modulos:
-utils/validaciones.js
    -validarEmail
    -validarNumero
    -validarNombre
    
    probar las funciones en index.js
    
    ejemplo:
    let email_recibido ='pepe@gmail.com"
    console.log(validarEmail(email_recibido)) deberia devolver false*/

const {crearTxt, leerTxt, crearJSON,leerJSON}= require('./utils/sistemaArchivos.js')

const persona = {
    nombre:'pepe',
    edad:90 
}
// crearJSON('persona-1',persona)
// crearTxt('archivo2.txt','wow que capa')
let persona_1= leerJSON('persona-1')
console.log(typeof persona_1)
// leerTxt()