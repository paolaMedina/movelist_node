const { Sequelize } = require('sequelize');

const db = new Sequelize('nlqgtsejm4evdm3x', 't6a96ty4mokbywo5', 'gp770qbh0ji6w2ve', {
    host: 'xefi550t7t6tjn36.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: '3306 ',
    dialect: 'mysql',
})

module.exports = db;