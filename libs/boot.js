module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get("port"), () => {
            console.log(`API listening on port ${app.get("port")}`);
        }); 
    });             
}