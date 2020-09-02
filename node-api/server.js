const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();
app.use(express.json());

const port = 3333;

// Inciando o DB
mongoose.connect(
   'mongodb://localhost:27017/nodeapi',
   {
      useNewUrlParser: true, useUnifiedTopology: true 
   });

require('./src/models/Product');

const Product = mongoose.model("Product");

// Primeira rota
app.use('/api', require('./src/routes'));

app.listen(3333, console.log('Rodando na porta:', port))