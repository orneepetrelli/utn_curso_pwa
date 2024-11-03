
import ERRORES from "../constants/errors.js"
import Usuario from "../models/user.model.js"

const crearUsuario = async(nombre,email,rol,password,direccion) =>{
    try{
        const usuario = new Usuario({
            nombre,
            email,
            rol,
            password,
            telefono,
            direccion}
        )
        const resultado = await usuario.save()
        console.log(resultado)
    }catch(error){
        const customError = ERRORES[error.code]
       console.log(customError)
       console.log(error)
    }
}

const buscarUsuarioPorId = async(id) =>{
try{
    if(!id){
        throw{error:'No recibi un id',code:3}
    }
    const result = await(Usuario.findById(id))
    console.log(result)
    return result
}catch(error){
    throw error
}

}


export {crearUsuario,buscarUsuarioPorId}