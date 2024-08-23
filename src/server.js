const express = require('express');

const app = express();

app.use(express.json())

const produtos = [];

app.get('/produto', (req, res) => {
  return res.status(200).json(produtos);
});

app.get('/produto/:id', (req, res) => {
  const { id } = req.params;
  const produto = produtos.find(p => p.id === Number(id));

  if (!produto) {
    return res.status(404).json({ message: "Produto não encontrado" })
  }

  return res.status(200).json(produto);
});

app.post('/produto', (req, res) => {

  const produto = produtos.find(p => p.id === req.body.id);


  if (produto) {
    return res.status(400).json({ message: "Id já cadastrado" })
  }

  produtos.push(req.body)

  return res.status(201).json(req.body);
})

app.listen(3000, () => console.log('Servidor em execução na porta 3000'));