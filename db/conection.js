const { Sequelize } = require('sequelize');

const db = new Sequelize('sgee', 'root', 'diegodev', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});




module.exports = db;

