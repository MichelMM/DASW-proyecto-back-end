const mongoose = require('./mongodb-connect')

let maquinariaSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    dealer:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    specifications:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    units:{
        type: Number,
        required: true
    },
    hourCost:{
        type: String,
        required: true
    },
    dayCost:{
        type: String,
        required: true
    },
    weekCost:{
        type: String,
        required: true
    },
    transport:{
        type: String,
        required: true
    }
    
});

maquinariaSchema.statics.addMaquinaria = function(maquinaria) {
    console.log(maquinaria);
    let newMaquinaria = User(maquinaria);
    return newMaquinaria.save();
}

let maquinaria = mongoose.model('maquinaria', maquinariaSchema);

module.exports = maquinaria;