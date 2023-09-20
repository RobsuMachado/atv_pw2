// importando módulos de express
const express = require('express');

//iriar uma instancia executavel do express
const app = express();

//rota de cadastro (post)
app.post('/produto/cadastrarProduto',(req, res)=>{
    res.send('Produto cadastrado com sucesso.');
});

//rota get de listar (get)
app.get('/produto/listarProduto',(req, res)=>{
    res.send('Produto listado com sucesso.');
});

//rota de alteração (put)
app.put('/produto/alterarProduto',(req, res)=>{
    res.send('Produto alterado com sucesso.');
});

//rota de excluir (delete)
app.delete('/produto/excluirProduto',()=>{
    res.send('Produto excluído com sucesso.');
});

//servidor requisição/resposta
app.listen(3000,()=>{
    console.log('Servidor rodando!');
});
