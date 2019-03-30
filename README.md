## Instruções

- Instalar [NodeJS](https://nodejs.org/en/).
- Criar uma conta e gerar uma chave de [API da Marvel](https://developer.marvel.com/docs#)
- Adicionar a public key e private key no arquivo no arquivo `.sample.env` e renomear o mesmo para `.env`.

```
REACT_APP_PUBLIC_KEY=PUBLIC_KEY_HERE
REACT_APP_PRIVATE_KEY=PRIVATE_KEY_HERE
```

- Rodar o comando `npm install` para instalar as dependências.


## Rodar projeto

No diretório do projeto, rodar o comando `npm start` para rodar o projeto em modo de desenvolvimento e acessar [http://localhost:3000](http://localhost:3000) para ver o projeto rodando no navegador.


## Rodar testes

No diretório do projeto, rodar o comando `npm test` para rodar os testes unitários.


## Gerar o build para deploy

No diretório do projeto, rodar o comando `npm run build`, para gerar o build do projeto otimizado para produção na pasta `build`.


### Dependências

- ReactJS
- Crypto-js
- Node Sass
