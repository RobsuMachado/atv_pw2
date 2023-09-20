//importando sequelize
const sequelize = require("sequelize");

// conectando com o banco de dados
const connection = require ("../database/database")

//identificando tabela categoria
const categoria = connection.define(
    'tbl_categoria',
    {
        codigo_categoria: {
            type: sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true   
        },

        nome_categoria: {
            type: sequelize.STRING(255),
            allowNull: false
        },

        observacoes_categoria: {
            type: sequelize.TEXT,
            allowNull: false
        }
    }
);

//sincronizando com banco de daods
//criando a tabela caso não existente
categoria.sync({forne:false})

module.exports = connection;