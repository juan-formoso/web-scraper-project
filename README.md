# Web Scraper Api Project! :space_invader:

Este projeto tem como objetivo:

- Construir uma API utilizando `Node` e `Express`;
- Exercitar a utilização de `TypeScript`;
- Aprender a utilizar o `MySQL` através do `PlanetScale`;
- Coletar dados de uma página utilizando `Cheerio`;
- Utilizar `Axios` para realizar requisições `FETCH`.

Essa aplicação consiste em uma API da obra **Throne of Glass** de Sarah J. Maas. Porém, os dados utilizados neste projeto foram adquiridos via Web Scraping da [Wiki de Throne of Glass](https://throneofglass.fandom.com/wiki/Throne_of_Glass_Wiki)! Através dessa API é possível listar todos os personagens ou algum específico através de seu **id**. :elf:

# Ferramentas usadas :hammer_and_wrench:

  > Node, Express, Typescript, PlanetScale, Axios.
 
---

### INSTRUÇÕES :

1. Clone o repositório
  * `git clone git@github.com:juan-formoso/web-scraper-project.git`.
  * Entre na pasta do repositório clonado:
    * `cd web-scraper-project`

2. Instale as dependências
  * `npm install`

3. Crie o banco de dados
  * Use o script existente em `sql/scripts.sql` e rode ele em seu client

4. Crie um arquivo dotenv
  * Crie o arquivo `.env` na pasta raiz do projeto
  * Use a variável de ambiente `DATABASE_URL` para definir a URL do banco

5. Popule o banco
  * `pscale connect nome_do_banco nome_da_branch --execute "npm run seed:db"` para popular o banco utilizando PlanetScale
 
6. Inicie o projeto
  * `npm start `
  * `npm run dev` caso queria rodar o projeto através do nodemon
