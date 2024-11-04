
import express from 'express'


const productoRoutes = express.Router()

//este endpoint es un parametro de busqueda
//el req.params sera un producto {prodct_id: 'valor x'}
productoRoutes.get('/detail/:lang/:product_id', (req,res)=>{
    const {product_id,lang} = req.params

    const {resumido} = req.query
    console.log(resumido)

    if(resumido == 'true'){
        return res.json({
            message: 'funciona'
        })
    }

    if(lang == 'es'){
    return res.json({
        ok: true,
        status: 200,
        payload:{
            message: 'Detalles del producto con id' + product_id
        }
    })
    }else {
        res.json({
            ok: true,
            status: 200,
            payload:{
                message: 'Details product' + product_id
            }
        })
    }
    
})

export default productoRoutes
//traer detalles al rpoducto id
//http://localhost:3000/api/product/detail