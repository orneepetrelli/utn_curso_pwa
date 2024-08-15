"use strict";
let nombre = 'pepe';
nombre = null;
/* soy una varible de js ni mas ni menos */
let datoRandom = 'hola';
console.log('hola ' + nombre);
/* sumar(a,b) devuelve a + b */
function sumar(a, b) {
    return a + b;
}
sumar(1, 2);
const persona = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 10
};
const persona_2 = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 10
};
const saludarPersona = (persona) => {
    alert('hola ' + persona.nombre);
};
saludarPersona(persona_2);
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
const num = 50;
function calcularIva(num) {
    return num * 0.21;
}
console.log(calcularIva(50));
function obtenerImpuestoIva(num) {
    const ivaNum = num * 0.21;
    const totalnum = num + ivaNum;
    const numero = num;
    return {
        iva: ivaNum,
        total: totalnum,
        base: num
    };
}
console.log(obtenerImpuestoIva(50));
