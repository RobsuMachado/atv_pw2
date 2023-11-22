//importando sequelize
const sequelize = require("sequelize");

// conectando com o banco de dados
const connection = require("../database/database")

//importação da tabela de categoria para criação da chave estrangeira
const categoria = require('./categoria')

//identificando tabela categoria
const produto = connection.define(
    "tbl_produtos",
    {
        codigo_produto: {
            type: sequelize.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },

        codigo_categoria: {
            type: sequelize.INTEGER(10).UNSIGNED,
            allowNull: false
        },

        nome_produto: {
            type: sequelize.STRING(255),
            allowNull: false
        },

        valor_produto: {
            type: sequelize.DECIMAL(10, 2),
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

/*Implementação da  CHAVE ESTRANGEIRA - LADO N*/
categoria.hasMany(produto, {
    foreignKey: 'codigo_categoria',
    sourceKey: 'codigo_categoria'
});

/*Implementação da  CHAVE PRIMÁRIA - LADO 1*/
produto.belongsTo(categoria, {
    foreignKey: 'codigo_categoria',
    sourceKey: 'codigo_categoria'
});

//sincronizando com banco de dados
//criando a tabela caso não existente
produto.sync({ force: false })

module.exports = produto;