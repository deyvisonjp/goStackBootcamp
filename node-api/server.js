const express = require('express');

const app = express();

const port = 3333;

app.use('/', (req, res) => {
   res.send('Sistema Node rodando na porta ' + port);
})

app.listen(3333, console.log('Rodando na porta:', port))