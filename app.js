const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));  // serve arquivos estáticos da pasta public

// rota da página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// rota para olimpiadas.html
app.get('/olimpiadas', (req, res) => {
  res.sendFile(path.join(__dirname, 'olimpiadas.html'));
});

// rota para NBA.html
app.get('/NBA', (req, res) => {
  res.sendFile(path.join(__dirname, 'NBA.html'));
});
app.get('/futebol', (req, res) => {
  res.sendFile(path.join(__dirname, 'futebol.html'));
});
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
