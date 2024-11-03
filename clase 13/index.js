
import {mongoose} from "../config/mongoDB.config.js";
//import { crearUsuario} from "./managers/user.manager.js";
import { buscarUsuarioPorId} from "./managers/user.manager.js";

//en vex de hacer esto
console.log(await buscarUsuarioPorId('7349613842'))//no es buena practica hacer await sueltos 

//es menjor hacer esto
//then se ejecuta cuando la promesa se cumple (o sea la funcion retona )
//catch se ejecuta cuando la promesa no se cumple(la fcuncion hizo un throw)
//solo conviene .then .catch si no deben hacermultiples operaciones asincronicas, sino podemos podemos caer en la callback hell
//finally es metodo de promesa que se ejecuta al finalizar la promesa ideendientemente de si laaccion funciono o fallo
// buscarUsuarioPorId()
// .then(
//     (retorno) => {
//         console.log(retorno)
//     }
// )
// .catch(
//     (error) => {
//         console.log('Ocurrio una excepcion', error)
//     }
// )
// .finally(() => {
//     console.log('proceso terminado')
// })

