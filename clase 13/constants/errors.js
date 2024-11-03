
const ERRORES ={
    'INVALID_ARGUMENT': {
        'code': 1,
        'message': 'Argumento invalido',
        'name': 'INVALID_ARGUMENT',
        'action': (from,detail) =>{
            console.log('El error viene de:  '+from+ '|Detalle: '+ detail)
            console.log('Mandar mail de notificacion de error')
            
        }
    },
    '11000':{
        'code': 2,
        'message': 'llave duplicada',
        'name': 'DUPLICATED_KEY',
        'action': null

    }
}

export default ERRORES 