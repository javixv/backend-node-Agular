const mongoose = require('mongoose');
require('dotenv').config()

const dbConection = async () => {

    try {
        mongoose.connect(process.env.DB_CNN);
        console.log('Conexion con exito MongoDb')
        
    } catch(error) {
        console.log(error)
        throw new Error('Error al conectar a la DB ver los logs')
    }


}

module.exports  = {
    dbConection
}