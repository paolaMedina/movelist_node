const { DataTypes } = require("sequelize");
const db = require("../db/connection");

const Movie = db.define('Movie', {
    title: {
        type: DataTypes.STRING
    },
    year: {
        type: DataTypes.STRING
    },
    imdbid: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
    poster: {
        type: DataTypes.STRING
    }
});

module.exports = Movie;