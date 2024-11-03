
import {mongoose} from "./config/mongoDB.config.js";

//mongooose trae esquemas
//mongo db no tiene esquemas

const usuarioSchema = new mongoose.Schema(
    {
        nombre: {type:String, required:true},
        emial: {type: String, required: true, unique:true},
        rol: {type: String, required:true },
        password: {type: String,required: true},
        telefono:{ type: String, required:true},
        direccion: {type: String, required:true},
        fecha_registro: {type: Date, defautl: Date.now}
    }

) //llamar una clase que le pasamos dato y nos devuleve

const Usuario= mongoose.model('Usuario', usuarioSchema)

new Usuario('pepe','pepe@gmail.com','user','pepe123',"12344566",'av siempre viva').save()