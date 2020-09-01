# NODE API - ROCKETSEAT STARTER

## PASSOS PARA CIRAÇÃO DO PROJETO:

- `npm init -y`
- `npm install express`  
- `npm install -D nodemon` 

**Para iniciar a aplicação, rodar o comando:**
- `npm run dev`

## INSTALANDO MongoDB com Docker
O _Docker é uma máquina virtual(linux) onde poodemos ter nossos sistemas de bancos_

Após instalado:
- `docker` -> Mostra os comandos;
- `docker pull mongo` -> Baixar a máquina virtual do MongoDB;
- `docker run --name mongodb -p 27017:27017 -d mongo` -> Sobe a nova máquina virtual, contendo a instalação com o nome desejado e na porta 27017 que é padrão com a 27017 que roda externamente no mongo(Poderia ser outro sistema como MySQL);
- `docker ps` -> Mostra quais imagens do mongo estão rodando;
- Para testar podemos agora rodar no navegador a url: localhost:27017;
- Podemos também testar(com mais propriedades) usando Robo 3T;
- Próxima vez que iniciar o computador, docker start ...
_docker ps -a_
_docker start nome-do-banco_

## Conexão com o banco de dados
- `npm install mongoose` ->> ORM de bancos não relacionais

