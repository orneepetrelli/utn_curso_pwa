//express 

import express from  'express'
import filesystem from 'fs'
//aqui guardaremos a nuestra api
const app = express()

//middleware que nos habilita a recibir una consulta  con la url enconded
app.use(express.urlencoded({extended:true}))
app.get('/', (request,response)=>{
    response.send('hola')
})


app.get('/fecha', (request,response)=>{
    response.send(new Date().toString())
})

app.post('/usuario', async  (request,response)=>{
   
    const usuario ={
        nombre: request.body.nombre,
        email: request.body.email
    }

    let usuarios
    const respuesta = await filesystem.promises.readFile('./usuarios.json','utf-8')
    if(!respuesta){
        usuarios= []
    }else{
        usuarios = JSON.parse(resultado)

    }
    usuarios.push(usuario)
    await filesystem.promises.writeFile('./usuarios.json', JSON.stringify(usuarios),{encoding: 'utf-8'})
    
    response.send('Usuario registrado con exito' )
})

app.listen(3000, () =>{
    console.log('Aplicacion escuchandose en http://localhost:3000')
})
