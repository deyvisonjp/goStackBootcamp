const express = require('express');

// Cria um id universal único
const { uuid, isUuid } = require('uuidv4');
const { response } = require('express');

const app = express();

// Facilita o retorno de objetos para JSON (converte o corpo da requisição)
app.use(express.json());

const projects = [];

// MIDDLEWARES
function logRequests(req, res, next) {
  const { method, url } = req;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.time(logLabel);

  next(); //Próximo middleare

  console.timeEnd(logLabel);
}

function validateProjectId(req, res, next) {
  const { id } = req.params;

  if (!isUuid(id)) {
    return res.status(400).json({ error: 'ID inválido'});
  }

  return next();

} 

// Aqui limitamos o middlewares para rodarem exclusivamente nessas rotas
app.use('/projects/:id', validateProjectId);

// VIEW
app.get('/projects', logRequests, (req, res) => {
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