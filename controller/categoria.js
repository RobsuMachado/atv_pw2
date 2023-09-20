// importando módulos de express
const express = require('express');

//iriar uma instancia executavel do express
const app = express();

//rota de cadastro (post)
app.post('/categoria/cadastrarCategoria',(req, res)=>{
    res.send('Categoria cadastrado com sucesso.');
});

//rota get de listar (get)
app.get('/categoria/listarCategoria',(req, res)=>{
    res.send('Categoria listada com sucesso.');
});

//rota de alteração (put)
app.put('/categoria/alterarCategoria',(req, res)=>{
    res.send('Categoria alterado com sucesso.');
});

//rota de excluir (delete)
app.delete('/categoria/excluirCategoria',()=>{
    res.send('Categoria excluído com sucesso.');
});

//servidor requisição/resposta
app.listen(3000,()=>{
    console.log('Servidor rodando!');
});