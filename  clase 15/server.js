//configuraciones de mi servidor, es decir mi API (server!= api)

import express from 'express'
import { request } from 'http'

const app= express()
const PORT = 3000
//middleware es una funcion que se ejecuta entre medio de una 
//middleware para poder recibir json en el body
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/ping', (request,response) =>{
    response.send('pong')
})

app.post('/enviar', (request,response)=>{
    console.log(request.body)
    response.send('Recibido')
})

app.listen(PORT, () =>{
    console.log(`El servidor se esta ejecutando en http://localhost:${PORT}`)

})