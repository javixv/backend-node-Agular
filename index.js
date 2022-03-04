const express = require('express')
const { dbConection } = require('./database/config')
require('dotenv').config()

const app = express()

//base de datos
dbConection()

//variables de entorno
// console.log(process.env)

//Rutas
app.get('/',(req, res)=> {

    res.json({
        ok : true,
        msj : 'Hola mundo'
    })

})
app.listen(process.env.PORT,()=>{
    console.log('servidor corriendo en el puerto 3000')
})