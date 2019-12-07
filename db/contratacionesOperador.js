const mongoose = require('./mongodb-connect')

let contratacionesOperadorSchema = mongoose.Schema({
    Operador: {
        image: {
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

contratacionesOperadorSchema.statics.addcontratacionesOperador = function (user) {
    console.log(user);
    let newUser = User(user);
    return newUser.save();
}

let contratacionOperador = mongoose.model('contratacionOperador', contratacionesOperadorSchema);

module.exports = contratacionOperador;