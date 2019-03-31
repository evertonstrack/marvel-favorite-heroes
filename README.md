# Marvel Favorite Heroes

## Pré-requisitos
- Instalar [NodeJS](https://nodejs.org/en/).


## Instruções
- Criar uma conta e gerar uma chave de [API da Marvel](https://developer.marvel.com/docs#)
- Adicionar `localhost` na lista de domínios permitidos nas [configurações da API da Marvel](https://developer.marvel.com/account) [neste local](http://prntscr.com/n56e2j).
- Adicionar a public key e private key (geradas no passo anterior) no arquivo `.sample.env`, como no exemplo abaixo:

```
REACT_APP_PUBLIC_KEY=PUBLIC_KEY_HERE
REACT_APP_PRIVATE_KEY=PRIVATE_KEY_HERE
```

- Renomear o arquivo `.sample.env` para `.env`.
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
