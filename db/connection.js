const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.BD_PASSWORD, {
    host: process.env.DB_HOST,
    port: '3306 ',
    dialect: 'mysql',
    logging: false
})

module.exports = db;