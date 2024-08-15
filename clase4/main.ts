/* Tema pendiente de typescript */

/* 
-datos primitivos
-funciones
-objetos literales
-objetos con interfaz
-arrays?
-metodos avanzados de array?
*/
// const useState = (initialvalue : any) => {
//     return [initialvalue]
// } 

// const nombres : string[] = ['pepe','juan','maria']

// const notaas : number[] =[10,7,2]

// const arrayEspecial : [string, number] = ['pepe',15]//primer valor string y segundo valor numerico.

// const mostrarEdad = (persona : [string,number]) : void => {
//     console.log(persona[1])
// }


// interface Producto{
//     nombre: string,
//     id: number,
//     precio: number,
//     descripcion: string,
//     title: string
// }

// const producto1 : Producto = {
//     nombre: 'tv samsung',
//     id: 1,
//     precio: 1,
//     descripcion: 'lorem',
//     title: ''
// }

// producto1.title = 'juan'

// const venderProducto = (producto : Producto) : void => {
//     console.log('Has cmprado el producto ' + producto.title)
// }



// const listaProducto : Producto[] =[ //array de objetos
//     producto1,
//     {
//     nombre: 'tv noblex',
//     id: 2,
//     precio: 30,
//     descripcion: 'lorem',
//     title: 'La mejor'
//     },
//     {
//     nombre: 'tv LG',
//     id: 3,
//     precio: 50,
//     descripcion: 'lorem',
//     title: 'Si'
//     }
// ]

// const tvNoblex : Producto | undefined = listaProducto.find(
//     (producto : Producto) => {
//     return producto.id === 2 
//     }
// )
// console.log(tvNoblex)

// const preciosArray : Array[] = listaProducto.map(
//     (producto : Producto) => {
//      if(producto.precio < 40){
//         return true
//         }else{
//             return false
//         }
//     }
// )

// console.log(preciosArray)

/* Quiero un array de booleanos donde los productos cuyo precio sea menor a 40 , esten como true, pero los que sean mayores o iguales esten como false 

[
    {precio: 10},
    {precio: 20},
    {precio: 41},
    {precio: 50}
]

return

[
    true,
    true,
    false,
    false
]
*/

/* Aqui veremos POO en typescript */

// class Personaje {
//     nombre : string //esto seria la interface

//     constructor(nombre : string){
//         this.nombre = nombre
//     }
//     comer(comida : string) : string {
//         return this.nombre + ' esta comiendo ' + comida
//     }
// }

// const personaje_principal: Personaje = new Personaje('pepe')
// let mensaje :string = personaje_principal.comer('pollo frito')
// document.write(mensaje)

let id_counter =0
class Producto{

    nombre: string
    precio: number 
    constructor(nombre : string , precio: number){
        this.nombre = nombre
        this.precio = precio
    }
}

class ManejadorProductos{
    productos : Producto[]
    id: number
    constructor(){
        this.productos = [] //inicialmente vacio
        this.id = id_counter ++
    }

    agregarProducto(producto : Producto) : Producto[] {//agrega producto
        this.productos.push(producto)
        return this.productos// retorna lista modificada
    }
}

const manejadorProducto : ManejadorProductos = new ManejadorProductos()

const producto_1 : Producto = new Producto('tv', 700)

manejadorProducto.agregarProducto(producto_1)
//es una mala practica
// ManejadorProducto.productos.push(producto_1)

console.log(manejadorProducto)

/* 

*/