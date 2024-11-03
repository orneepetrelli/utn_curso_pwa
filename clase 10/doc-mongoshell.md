
ACLARACION: cuando ponga<> no es HTML o algo que deban usar, simplemente reemplazen.
Ejemplo:

use <nombre_base_datos> | Van a escribir: use db_clases
nombre: <tu_nombre>

Movernos a la base de datos que queremos usar
use <nombre_base_de_datos> 


Crear una coleccion
db.<nombre_de_base_de_datos>.createCollection("<nombre_coleccion>")
ejemplo:
Pongo esto:
db.APP_HOMEWORKING_UTN_TM.createColecction("usuarios")

si la tengo seleciionada me queda:
db.createColecction("usuarios")

Actualizamos

Insertar en nuestra coleccion:

db.<nombre_coleccion_a_insertar>.insertOne(<objeto_de_insercion>)
db.<nombre_coleccion_a_insertar>.insertMany(<array_de_insercion>)

db.usuarios.insertOne({
    nombre:"pepe",
    email:"pepe@gmail.com",
    rol:"usuarios",
    password:"pepesito123",
    nro_telefono:"+54 911 23221323",
    direccion: "Argentina, BS AS",
    creado_en: new Date()
})

db.usuarios.insert  Many(
    [
    {
    nombre:"pepe",
    email:"pepe@gmail.com",
    rol:"usuarios",
    password:"pepesito123",
    nro_telefono:"+54 911 23221323",
    direccion: "Argentina, BS AS",
    creado_en: new Date()
},
{
    nombre:"pepe",
    email:"pepe@gmail.com",
    rol:"usuarios",
    password:"pepesito123",
    nro_telefono:"+54 911 23221323",
    direccion: "Argentina, BS AS",
    creado_en: new Date()
}
    ]
)

Buscar elementos en nuestra Db:

db.usuarios.find("email:pepe@gmail.com)

db.usuarios.find({})

db.usuarios.findOne //devuelve solo uno

db.usuarios.findOne({email:"pepe@gmail.com"})

Eliminar un elemento en nuestra db:

db.usuarios.deleteOne({_id: ObjectId("<copiamos_el_string_del_id>")})

Elimianr varios elementos:

db.usuarios.deleteMany()

Actualizar elementos:

db.usuarios.updateOne(
    {
        _id: ObjectId(<copiamos_el_string_del_id>")
    },
    {
        $set:{
            email:"pepesito@gmail.com",
            nro_telefono: "6783931378",
            nombre: "pepesito",
            password: "pepesito1234"
        }
    }
)