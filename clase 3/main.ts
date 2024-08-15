let nombre: string | null = 'pepe'
nombre = null

/* soy una varible de js ni mas ni menos */
let datoRandom: any = 'hola'
console.log('hola ' + nombre)


/* sumar(a,b) devuelve a + b */

function sumar(a: number, b: number): number {
    return a + b
}

sumar(1, 2)

// /* cuando hay un ? al final de un parametro signfica que ese valor es OPCIONAL  */
// const saludar = (edad : number = 10,nombre?: string) => {
//     console.log('mi edad es '+ edad)
//     if(nombre){
//         return 'hola ' + nombre
//     }else{
//         return 'Hola, no se tu nombre'
//     }
// }
// console.log(saludar())

// prompt('dime algo','hola')

interface Persona {
    nombre: string,
    apellido: string,
    edad: number
}

const persona: Persona = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 10
}

const persona_2: Persona = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 10
}

const saludarPersona = (persona: Persona): void => {
    alert('hola ' + persona.nombre)
}

saludarPersona(persona_2)

/* 
calcularIva que recibe un numero y devuelve un numero que sera el 21% del numero recibido

obtenerImpuestoIva que recibira un numero y retornara un objeto , el objeto tendra el siguiente esquema:
{
    iva: 21% del numero recibido,
    total: numero recibido + iva,
    base: numero recibido
}

crear una funcion que se llame crearPersonaje que recibira un nombre, una edad y una ciudad de origen y retornara
un objeto con el sig esquema:
{
    nombre: nombre,
    edad: edad,
    ciudadOrigen: ciudadOrigen,
    vida: 100,
    armadura: 0,
    ataque: 0,
    defensa: 0
}
*/

function calcularIva(num: number): number {
    return num * 0.21
}
console.log(calcularIva(50))

interface Objeto {
    iva: number,
    total: number,
    base: number,
}

function obtenerImpuestoIva(num: number): Objeto {
    const ivaNum = num * 0.21;
    const totalnum = num + ivaNum;
    const numero = num
    return {
        iva: ivaNum,
        total: totalnum,
        base: num
    }
}
console.log(obtenerImpuestoIva(50))

interface Personaje {
    nombre: string,
    edad: number,
    ciudadOrigen: string,
    vida: number,
    armadura: number,
    ataque: number,
    defensa: number
}

function crearPersonaje(nombre: string, edad: number, ciudadOrigen: string): Personaje {
    
}