// importando módulos de express
const express = require('express');

const produtoModel = require("../model/produto")

const router = express.Router ();

//criando rotas
app.post('/produto/cadastrarProduto',(req, res)=>{
    res.send('Categoria cadastrado com sucesso.');
});

app.get('/produto/listarProduto',(req, res)=>{
    res.send('Categoria listada com sucesso.');
});

app.put('/produto/alterarProduto',(req, res)=>{
    res.send('Categoria alterado com sucesso.');
});

app.delete('/produto/excluirProduto', (req, res) => {
    res.send('Categoria excluído com sucesso.');
});

module.exports = router;