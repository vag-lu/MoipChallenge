module.exports = app => {
    const TransactionBoleto = app.db.models.TransactionBoleto;
    app.route("/boleto")
        .all((req, res, next) => {
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            TransactionBoleto.findAll({}).then(transactionBoleto => {
                res.json({boletos: transactionBoleto});
            });
        })
        .post((req, res) => {
            let boletonumber = generateBoleto(50,'0123456789');
            req.body.boleto_number = boletonumber;
            req.body.status = "pending";
            TransactionBoleto.create(req.body)
                .then(result => res.json({
                    "id_transaction": result.id,
                    "return": boletonumber
                }))
                .catch(error => {
                    res.status(412).json({"msg": error.message});
                });                        
        });

    app.route("/boleto/:id")
        .all((req, res, next) => {
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            TransactionBoleto.findOne({where: req.params})
            .then(result => {
                if(result){
                    res.json(result);
                }else{
                    res.json({"msg": "Not found!"});
                }
            })
            .catch(error => {
                res.status(412).json({"msg": error.message});
            });
        });
}

function generateBoleto(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}