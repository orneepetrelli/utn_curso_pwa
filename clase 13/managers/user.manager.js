
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

const actualizarUsuario = async(id,data) => {
    try{
        //findByIdAndUpdate
        //recibe ID, objeto de cambios, objeto de opciones
        //id: id del elemento a actaulizar
        //objeto de cambios: obkjeto con los cambios que queremos hacer ene le documento 
        //opciones: objetos de opciones en la actaulizacion

   const usuarioActualizado= await Usuario.findByIdAndUpdate(id,data,{new: true})
   console.log(usuarioActualizado)
    }catch(error){
        console.log('ERROR',error)
    }
}

const eliminarUsuarioPorId= async(id) =>{
    try{
        if(!id){
            throw{error: 'No recibi id'}
        }
       const resultado= await Usuario.findByIdAndDelete(id)
       console.log(resultado)
    }catch(error){
        console.log(error)
    }

}

eliminaerUsuarioPorId('uibf129une')
actualizarUsuario('qefb3y8e',{direccion:'prueba 1',valor:'prueba 5'})// no tira error pero no lo agrega 
export {crearUsuario,buscarUsuarioPorId}