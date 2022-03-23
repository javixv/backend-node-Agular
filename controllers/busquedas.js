const { response} = require('express')

const getBuscar = async (req, res = response) => {

    const busqueda = req.params.buscar

    res.status(200).json({
        ok :true,
        msj : 'en getBuscar',
        busqueda
        
    })
}


module.exports = {
    getBuscar
}