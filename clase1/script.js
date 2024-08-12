// let objeto_en_JSON = `{
//     "version": "1.0.0",
//     "lang": {
//         "es":{
//             "title": "Configuracion de la pagina"
//         },
//         "en": {
//             "tittle": "Page configuration"
//         }
//     }
// }`

// let objeto_en_JS =JSON.parse(objeto_en_JSON)
// // console.log(objeto_en_JS)

// let persona ={nombre: 'pepe', apellido: 'suarez'}

// let persona_a_JSON = JSON.stringify(persona)

// console.log(persona_a_JSON)
// const getLukeSkywalker = async () => {
//     const UR_API = 'https://swapi.dev/api/'
//     const respuesta = await fetch(UR_API + '/people/1', {
//         method: 'GET'
//     })
//     const resultado = await respuesta.json()
//     console.log(resultado)
// }
// getLukeSkywalker()

// localStorage.setItem('nombre','pepe')

// let nombre = localStorage.getItem('nombre')

// let usuario={nombre: 'pepe'}
// localStorage.setItem('usuario',usuario) //devuelve objeto y es un problema, debo trasnfromarlo a string

// localStorage.setItem('usuario',JSON.stringify(usuario))

// let usuario = JSON.parse(localStorage.getItem('usuario'))
// console.log(usuario.nombre)

// let hora = new Date()

// console.log(hora.toTimeString())//para la fecha

const formLoginHTML =document.getElementById('formLogin')
const validarNombre =(value) => {
    return Boolean(value) && value.length > 5
}
const validarEdad =(value) => {
    return Boolean(value) && !isNaN(value) && value >= 1 && value <= 120
}
const formLoginInputs ={
    'nombre':{
        validar: validarNombre,
        errorText: 'Nombre incorrecto, debe tener mas de 5 caracteres'
    },
    'edad':{
        validar: validarEdad,
        errorText: "Edad incorrecta debe ser un numero positivo mayor a 1 y enor de 120"

    }
}
formLoginHTML.addEventListener('submit' , (event) =>{
    event.preventDefault()
    const formloginData = new FormData(formLoginHTML)
    for (let propiedad in formLoginInputs){
        const inputValue= formloginData.get(propiedad)
        if(!formLoginInputs[propiedad].validar(inputValue)){
            alert(formLoginInputs[propiedad].errorText)
        }

    }
})