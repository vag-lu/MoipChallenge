import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

module.exports = app => {
    app.set("port", 3000);
    app.set("json spaces", 4);
    // app.use(function (req, res, next) {
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    //     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    //     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    //     res.setHeader('Access-Control-Allow-Credentials', true);
    //     next();
    //   });
    app.use(cors());
    
    app.use(bodyParser.json());
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    });
    // app.use(function (req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    // });
};