# CONCEITOS BACKEND COM NODE - ROCKETSEAT

## INICIALMENTE

- Criar o projeto (criar o arquivo package.json com as configurações):
  - `yarn init -y`
- Instalar o Express para automatizações como por exemplo rotas;
  - `yarn add express -D`
- Instalar nodemon (automatizar servidor)
  - `yarn add nodemon -D`
  - Configurar script para o nodemon

## METÓDOS HTTP
#### GET: Buscar informações do back-end
#### POST: Criar uma informação no back-end
#### PUT/PATH: Alterar uma informação no back-end
#### DELETE: Deletar uma informação no back-end

## TIPOS DE PARÂMETROS
#### QUERY PARAMS: Filtros e paginação (Vai dentro da url)
#### ROUTE PARAMS: Identificar recursos, Atulizar/Deletar (Ex. localhost:3333/aluno:id)
#### REQUEST BODY: Conteúdo que vai na criação ou edição de um recurso (JSON)

## AULA 8 - APLICAÇÃO FUNCIONAL
- Instalar uuidv4;
  `yarn add uuidv4` 