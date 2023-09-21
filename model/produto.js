//importando sequelize
const sequelize = require("sequelize");

// conectando com o banco de dados
const connection = require ("../database/database")

//identificando tabela categoria
const produto = connection.define(
    'tbl_produto',
    {
        codigo_produto: {
            type: sequelize.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true   
        },

        codigo_categoria: {
            type: sequelize.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true   
        },

        nome_produto: {
            type: sequelize.STRING(255),
            allowNull: false
        },

        valor_produto: {
            type: sequelize.DECIMAL(10,2),
            allowNull: false
        },

        imagem_produto: {
            type: sequelize.STRING(500),
            allowNull: false
        },
        descricao_produto: {
            type: sequelize.TEXT,
            allowNull: false
        }
    }
);

//sincronizando com banco de daods
//criando a tabela caso não existente
produto.sync({forne:false})

module.exports = produto;