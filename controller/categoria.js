// importando módulos de express
const express = require('express');

const categoriaModel = require("../model/categoria")

const router = express.Router ();

//criando rotas
router.post('/categoria/cadastrarCategoria',(req, res)=>{
    res.send('Categoria cadastrado com sucesso.');
});

router.get('/categoria/listarCategoria',(req, res)=>{
    res.send('Categoria listada com sucesso.');
});

router.put('/categoria/alterarCategoria',(req, res)=>{
    res.send('Categoria alterado com sucesso.');
});

router.delete('/categoria/excluirCategoria', (req, res) => {
    res.send('Categoria excluído com sucesso.');
});

module.exports = router;