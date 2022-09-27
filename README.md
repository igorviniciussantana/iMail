
# iMail

Esse projeto consiste no desenvolvimento de uma aplicação que usa o JSON Web Token
como meio de autenticação. Ela é capaz de cadastrar e retornar usuários
do seu banco de dados e cada usuário pode se autenticar utilizando
seus dados.


## Referência

 A aplicação foi desenvolvida com base no projeto disponibilizado pelo professor [Luiz Picolo](https://github.com/luizpicolo).

## Protótipo
🖥 - [iMail - Figma](https://www.figma.com/file/bskiksJ9hAyymGB2SIqfJh/i-Mail?node-id=0%3A1)

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


## 👤 - Autor

<table>
  <tr>
    <td align="center"><a href="https://github.com/igorviniciussantana"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/86114583?v=4" width="100px;" alt=""/><br /><sub><b>Igor Vinicius</b></sub></a><br /><br /><a href="https://linkedin.com/in/igorviniciussantana"><img src="https://user-images.githubusercontent.com/86114583/192514843-1087a34f-74f9-46aa-94fa-e824950af81f.svg" width="20px"/></a>⠀<a href="mailto:igor.santana@estudante.ifms.edu.br"><img src="https://user-images.githubusercontent.com/86114583/192515071-4fa6bce6-6ee9-49ca-9395-c17e74075a20.svg" width="20px"/></a>⠀<a href="https://behance.net/igorvinicius8"><img src="https://user-images.githubusercontent.com/86114583/192515924-e754ab5f-d7bc-416f-a3f9-0b6e3e81eb6c.svg" width="20px"/></a>
    </td>
    </tr>
    </table>


