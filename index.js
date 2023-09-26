//importando sequelize
const express = require("express");

//modulo express
const app = express();

app.use(express.json());

// conectando com o banco de dados
const connection = require("./database/database");

const categoriaController = require("./controller/categoriaController");
app.use("/", categoriaController);

const produtoController = require("./controller/produtoController");
app.use("/", produtoController);

app.listen(3000, () => {
    console.log('Servidor rodando!', '\n', 'ROTA: http://localhost:3000')
});