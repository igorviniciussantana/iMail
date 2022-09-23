
# iMail

Esse projeto consiste no desenvolvimento de uma aplicação que usa o JSON Web Token
como meio de autenticação. Ela é capaz de cadastrar e retornar usuários
do seu banco de dados e cada usuário pode se autenticar utilizando
seus dados.


## Referência

 A aplicação foi desenvolvida com base no projeto disponibilizado pelo professor [Luiz Picolo](https://github.com/luizpicolo).

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/igorviniciussantana/iMail.git
```

Entre no diretório do projeto

```bash
  cd iMail
```

Acesse o diretório do servidor

```bash
  cd servidor
```

Instale as dependências

```bash
  npm install
```

Configure o arquivo .env com base no arquivo .env.example

```bash
  /.env
```

Crie o banco

```bash
  yarn sequelize db:create
```

Migre o banco

```bash
  yarn sequelize db:migrate
```

Inicie o servidor

```bash
  yarn start
```

Por fim, acesse a rota `/admin` para cadastrar o usuário admin no seu banco.
Com ele você pode cadastrar outro usuários.

## Protótipo
🖥 - [iMail - Figma](https://www.figma.com/file/bskiksJ9hAyymGB2SIqfJh/i-Mail?node-id=0%3A1)
## Autores

<img src="https://avatars.githubusercontent.com/u/86114583?v=4" alt="drawing" width="100"/>

[@igorviniciussantana](https://www.github.com/igorviniciussantana)

[![Linkedin Badge](https://img.shields.io/badge/-Igor-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/igorviniciussantana/)](https://www.linkedin.com/in/igorviniciussantana/)
[![Gmail Badge](https://img.shields.io/badge/-Igor-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:igor.santana@estudante.ifms.edu.br)](mailto:igor.santana@estudante.ifms.edu.br)

