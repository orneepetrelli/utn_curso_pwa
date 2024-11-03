

/* Funcion que reciba precio y retorne un objeto con 
recibe 100
{
    iva:21,
    precio_original:100,
    precio_final: 121
} 
*/

const calcularPrecioConIva =(precio) => {
    const iva = precio * 0.21
    const precio_final= precio + iva
    return{
        iva,
        precio_original: precio,
        precio_final
    }
}

module.exports ={
    nombre: 'pepe',
    calcularPrecioConIva:  calcularPrecioConIva,
    formatearPrecio
}