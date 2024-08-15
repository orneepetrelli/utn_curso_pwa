/* Aqui veremos POO en JS */


// const produto1 = {
//     nombre: 'pc dell',
//     precio: 100,
//     id: 1
// }
// const produto2 = {
//     nombre: 'pc dell',
//     precio: 100,
//     id: 2
// }
// const produto3 = {
//     nombre: 'pc dell',
//     precio: 100,
//     id: 3
// }
let id_counter = 1
// const crearProducto = (nombre, precio, descripcion) => {
//     return {
//     nombre: nombre,
//     precio: precio,
//     descripcion: descripcion,
//     id: id_counter++
//     }
// }

// const producto_1 = crearProducto('pc dell', 300,'lorem')
// const producto_2 = crearProducto('Pc samsung', 600, 'lorem')
// const producto_3 = crearProducto('pc escritorio', 1400 , 'lorem')

// console.log(producto_1,producto_2,producto_3)

/*function Producto (nombre , precio, descripcion){
    this.nombre= nombre
    this.precio= precio
    this.descripcion = descripcion
    this.id= id_counter++
} 
Producto.prototype.saludar =function(){
    console.log('hola')
}//se buarda solo una vez */

/* Cada vez que instancie el obj se va a crear y guardar la funcioon saludar */

/* 
-las propiedades se crean en cada instancia del objeto
-los metodos se crean una sola vez (como las funciones)
-las clases retornan siempre a this, que es un objeto
-podemos modificar a this como si fuera un objeto9es un objeto (en contexto de clases)
*/

/*const producto_x = new Producto('pc', 100,'lorem') //llamamos a la funcion, estamos instanciando
const producto_b = new Producto('pc', 100,'lorem') 
const producto_c = new Producto('pc', 100,'lorem') 

console.log(producto_x)

producto_x.saludar()//llamo directamente a lo que esta guardado en el prototipo


constructor es una funcion que se invoca al instanciar una clase

las clases devuelven objetos
*/

class Personaje{
    constructor(nombre){
        console.log('Hola, me estoy instanciando')
        console.log(nombre)
        //crear la propiedad en el objeto llamada propiedad_x con el valor random
        this.propiedad_x ='random'
        this.nombre = nombre

        //muestro por consola el objeto
        // console.log(this)
    }

    comer (comida){
        // console.log('estoy comiendo ' + comida)
        return "estoy comiendo " + comida
    }
}
//instanciar la clase personaje
const personaje = new Personaje('pepe')
const personaje_2 = new Personaje('juan')

alert(personaje.comer('pollo con fritas'))
console.log(personaje.comer('empanada con fritas'))
document.write(personaje.comer('milanesa con pure'))
// console.log(personaje)