const { DataTypes } = require("sequelize/types");
const db = require("../db/connection");

const movie = db.define('Movie' {
    title: {
        type: DataTypes.STRING
    },
    year: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
    poster: {
        type: DataTypes.STRING
    }
});

module.exports = movie;