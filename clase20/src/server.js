
import express from 'express'

import statusRouter from './router/status.router.js'


const app = express()
const PORT = 3000


app.use('/api/status', statusRouter)

app.listen(PORT, () => {
    console.log(`El servidor se esta escuchando en http://localhoste:${PORT}`)
})