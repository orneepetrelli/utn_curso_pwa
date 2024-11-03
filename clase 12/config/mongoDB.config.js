import mongoose from "mongoose";

const DB_URL = 'mongodb://localhost:27017'
const DB_NAME= 'APP_HOMEWORKING_UTN_TM'
const DB_CONNECTION_STRING= '${DB_URL}/${DB_NAME}'


mongoose.connect(DB_URL)

const database = mongoose.connection 

database.once('open', ()=> {
    console.log("Conexion exito con MONGO DB")
})

database.on('error', () => {
    console.log('ERROR MONGO DB')
})
//exportamos a mongoose que ya esta conectado ala base de dato
// y la database para poder intercatuar con la db

console.log('pepito')
export {
    mongoose,
    database
}