const express = require('express');

// Cria um id universal único
const { uuid } = require('uuidv4');
const { response } = require('express');

const app = express();

// Facilita o retorno de objetos para JSON
app.use(express.json());

const projects = [];

// VIEW
app.get('/projects', (req, res) => {
  const { title } = req.query;

  const pesquisa = title //Se o título foi preenchido pelo usuário, então pesquisa vai receber
    ? projects.filter(project => project.title.includes(title))
    : projects;

  return res.json(pesquisa);
});

// CREATE
app.post('/projects', (req, res) => {
  const { title, owner } = req.body;
  const project = { id: uuid(), title, owner }
  
  projects.push(project);

  return res.json(project);
});  

// UPDATE
app.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title, owner } = req.body;

  const projectIndex = projects.findIndex(project => project.id == id);

  if (projectIndex < 0) {
    return res.status(400).json({ error: 'Projeto não encontrado!'})
  }

  const project = {
    id, title, owner
  }

  projects[projectIndex] = project;

  return res.json(project);
})

// DELETE
app.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return res.status(400).json({ error: "Projeto não encontrado!"})
  }

  projects.splice(projectIndex, 1);

  return res.status(204).send();

})

app.listen(3333, () => {console.log('Servidor rodando na porta 3333!✌')});        