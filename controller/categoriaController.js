// importando módulos de express
const express = require('express');

const categoriaModel = require("../model/categoria")

const rout = express.Router();

//criando rotas
rout.post('/categoria/cadastrarCategoria', (req, res) => {
    res.send('Categoria cadastrada com sucesso.');
});

rout.get('/categoria/listarCategoria', (req, res) => {
    res.send('Categoria listada com sucesso.');
});

rout.put('/categoria/alterarCategoria', (req, res) => {
    res.send('Categoria alterada com sucesso.');
});

rout.delete('/categoria/excluirCategoria', (req, res) => {
    res.send('Categoria excluída com sucesso.');
});

module.exports = rout;