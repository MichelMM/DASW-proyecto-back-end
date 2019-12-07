const express = require('express');
const router = express.Router();
const ContratacionesMaquina = require('../db/contratacionesMaquina')

router.route('/')
    .get((req, res) => {
        ContratacionesMaquina.find()
            .then(contratacionesMaquinas => {
                res.statusCode = 200;
                res.send(contratacionesMaquinas);
            })
            .catch(reason => {
                res.statusCode = 500;
                res.end();
            });
    })

    .post(async function (req, res) {
            let newContratacionMaquina = req.body;
            console.log(req.body);
            // Validar si vienen las propiedades
            if (!newContratacionMaquina.beginContractDate || !newContratacionMaquina.endContractDate || !newContratacionMaquina.PaymentDay) {
                res.statusCode = 400;
                res.send('Las propiedades requeridas son: name');
            } else {
                let ContratacionMaquinaDocument = ContratacionesMaquina(newContratacionMaquina);
                ContratacionMaquinaDocument.save()
                    .then(maquina => { 
                        res.statusCode = 201;
                        res.send(maquina);
                    })
                    .catch(reason => {
                        res.statusCode = 500;
                        res.end();
                    });
            }
        }
    )

    ;
module.exports = router;