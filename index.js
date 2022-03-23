require('dotenv').config()

const express = require('express')
const cors = require('cors')

const { dbConection } = require('./database/config')

const app = express()

//CORS config
app.use(cors())

//Lectura del body y parseo
app.use(express.json() )

//base de datos
dbConection()

//variables de entorno
// console.log(process.env)

//Rutas
app.use('/api/usuarios', require('./routes/usuarios'))
app.use('/api/hospitales', require('./routes/hospitales'))
app.use('/api/medicos', require('./routes/medicos'))
app.use('/api/login', require('./routes/auth'))
app.use('/api/todo', require('./routes/busquedas'))
// app.get('/',(req, res)=> {

//     res.json({
//         ok : true,
//         msj : 'Hola mundo'
//     })

// })
app.listen(process.env.PORT,()=>{
    console.log('servidor corriendo en el puerto 3000')
})