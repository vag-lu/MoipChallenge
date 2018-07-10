module.exports = app => {
    const TransactionCreditCard = app.db.models.TransactionCreditCard;
    app.route("/creditcard")
        .get((req, res) => {
            TransactionCreditCard.findAll({}).then(transactionCreditCard => {
                res.json({Transactions: transactionCreditCard});
            });
        })
        .post((req, res) => {
            var status = procCard();
            req.body.status = status;
            TransactionCreditCard.create(req.body)
            .then(result => res.json({
                "id_transaction": result.id,
                "return": status
            }))
            .catch(error => {
                res.status(412).json({"msg": error.message});
            });                 
        });

    app.route("/creditcard/:id")
        .get((req, res) => {
            TransactionCreditCard.findOne({where: req.params})
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
        })
}

function procCard() {
    var approved = Math.random();
    if(approved <= 0,98){
        return "approved";
    }else{
        return "rejected";
    }
}