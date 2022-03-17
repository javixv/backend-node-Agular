const { Schema, model} = require('mongoose')

const MedicoSchema = Schema({

    nombre : {
        type :String,
        require : true
    },
    img : {
        type :String
        
    },
    usuario : {
        type : Schema.Types.ObjectId,
        ref : 'Usuario',
        equire : true
    },
    hospital : {
        type : Schema.Types.ObjectId,
        ref : 'Hospital',
        equire : true
    }
    
}, { collection : 'Medicos'})

MedicoSchema.method('toJSON', function(){
    const {__v, ...object} = this.toObject();    
    return object;
})

module.exports = model('Medico', MedicoSchema)