const express = require('express');
const router = express.Router();
const ContratacionesOperadores = require('../db/contratacionesOperador')

router.route('/')
    .get((req, res) => {
        ContratacionesOperadores.find()
            .then(contratacionesOperadores => {
                res.statusCode = 200;
                res.send(contratacionesOperadores);
            })
            .catch(reason => {
                res.statusCode = 500;
                res.end();
            });
    })

    .post(async function (req, res) {
            let newContratacionOperador = req.body;
            console.log(req.body);
            // Validar si vienen las propiedades
            if (!newContratacionOperador.beginContractDate || !newContratacionOperador.endContractDate || !newContratacionOperador.PaymentDay) {
                res.statusCode = 400;
                res.send('Las propiedades requeridas son: fecha de inicio, fecha de fin y fecha de pago');
            } else {
                let ContratacionOperadorDocument = ContratacionesOperadores(newContratacionOperador);
                ContratacionOperadorDocument.save()
                    .then(operador => { 
                        res.statusCode = 201;
                        res.send(operador);
                    })
                    .catch(reason => {
                        res.statusCode = 500;
                        res.end();
                    });
            }
        }
    );
module.exports = router;