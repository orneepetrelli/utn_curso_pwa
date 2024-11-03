
import {mongoose} from "./config/mongoDB.config.js";

//mongooose trae esquemas
//mongo db no tiene esquemas

const usuarioSchema = new mongoose.Schema(
    {
        nombre: {type:String, required:true},
        email: {type: String, required: true, unique:true},
        rol: {type: String, required:true },
        password: {type: String,required: true},
        telefono:{ type: String, required:true},
        direccion: {type: String, required:true},
        fecha_registro: {type: Date, defautl: Date.now}
    }

) //llamar una clase que le pasamos dato y nos devuleve

const Usuario= mongoose.model('Usuario', usuarioSchema)
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

crearUsuario('juan','juan@gmail.com','user','pepesito1234','12345','blabla')