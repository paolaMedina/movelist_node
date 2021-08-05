const express = require('express');
// const cors = require('cors');

const db = require('../db/connection');
const {
    moviesLoad,
    moviesShow
} = require('../controllers/movies');


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

        this.app.get('/moviesLoad', moviesLoad);
        this.app.get('/moviesShow', moviesShow);

    }

    listen() {
        this.app.listen(this.port);
    }

}

module.exports = Server;