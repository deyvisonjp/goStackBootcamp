const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();
const port = 3333;

// Inciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

// Primeira rota
app.use('/', (req, res) => {
   res.send('Sistema Node rodando na porta ' + port);
})

app.listen(3333, console.log('Rodando na porta:', port))