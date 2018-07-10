module.exports = app => {
    app.get("/", (req, res) => {
        res.json({status: "API UP!"});
    });

    app.get("/boleto",(req, res) => {

    });

    app.get("/credito",(req, res) => {

    });
};