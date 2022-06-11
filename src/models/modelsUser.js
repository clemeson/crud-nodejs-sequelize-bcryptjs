const Sequelize = require('sequelize');

const database = require('../db');

const user = database.define('user', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    login: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false

    },
    
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

module.exports = user;