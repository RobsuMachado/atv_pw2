//importando sequelize
const sequelize = require("sequelize");

// conectando com o banco de dados
const connection = require("../database/database")

//identificando tabela categoria
const categoria = connection.define(
    'tbl_categoria',
    {
        codigo_categoria: {
            type: sequelize.INTEGER(10).UNSIGNED,
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

//sincronizando com banco de dados
//criando a tabela caso não existente
categoria.sync({ force: false })

module.exports = categoria;