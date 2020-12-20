# Server_autenticação_JWT_RS256

## :information_source: O que é:
Este projeto traz um exemplo do funcionamento básico do back-end que lida com o cadastro e autenticação de usuários.
A autenticação é feita através de tokens contidos nos cookies do usuário, esses enviados pelo servidor no momento do login. Os token são gerados utlizando JWT com o algoritmo RS256, um sistema de criptografia que utiliza chaves públicas e privadas.

## Como rodar?
Após clonar esse repositório você pode rodar os comandos:

<li>Iniciar o servidor: npm start</li>

<li>Realizar as migrations do banco de dados: npm run knex-db-migrate</li>


## :warning: Tecnologias Utilizadas
Foram utilizadas diversas tecnologias que auxíliariam na finalização do projeto. As quais são:

[NodeJS](https://nodejs.org/en/docs/)

[Express](https://expressjs.com)

[SQlite3](https://dev.mysql.com/doc/s)

[Knex](http://knexjs.org/)

[Bcrypt](https://www.npmjs.com/package/bcrypt)

[JWT](https://jwt.io/)

Entre outras bibliotecas que auxiliaram na construção.



