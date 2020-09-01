const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();
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
app.use('/', (req, res) => {
   Product.create({
      title: 'Node Rocketseat',
      description: 'Project Node API example',
      url: 'https://github.com/deyvisonjp/rocketseat-node/tree/master/node-api'
   })
   res.send('Sistema Node rodando na porta ' + port);
})

app.listen(3333, console.log('Rodando na porta:', port))