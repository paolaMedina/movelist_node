const express = require('express');
// const cors = require('cors');

const db = require('../db/connection');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.dbConnection();
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database successful');

        } catch (error) {
            throw new Error(error);
        }
    }


    routes() {


    }

    listen() {
        this.app.listen(this.port);
    }

}

module.exports = Server;