const mongoose = require('./mongodb-connect')

let contratacionesMaquinaSchema = mongoose.Schema({
    Maquina: {
        image: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        dealer: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        }
    },
    Contratista: {
        CompanyName: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        payInfo: {
            type: String,
            required: true
        }
    },
    beginContractDate: {
        type: String,
        required: true
    },
    endContractDate: {
        type: String,
        required: true
    },
    PaymentDay: {
        type: String,
        required: true
    }
});

contratacionesMaquinaSchema.statics.addcontratacionesMaquina = function (user) {
    console.log(user);
    let newUser = User(user);
    return newUser.save();
}

let contratacionMaquina = mongoose.model('contratacionMaquina', contratacionesMaquinaSchema);

module.exports = contratacionMaquina;