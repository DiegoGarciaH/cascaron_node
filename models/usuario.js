const { DataTypes } = require('sequelize');
const db = require('../db/conection');

const super_user = db.define('super_user', {
    matricula_su:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido_p: {
        type: DataTypes.STRING
    },
    apellido_m: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    contra: {
        type: DataTypes.STRING
    },
    estatus: {
        type: DataTypes.TINYINT,
        validate: {
            
        }
    },
    rol: {
        type: DataTypes.TINYINT
    },
});


module.exports = super_user;