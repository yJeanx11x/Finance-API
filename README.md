# 🚀 Finance API

API REST para controle financeiro pessoal desenvolvida com Node.js, Express, Sequelize e MySQL. O sistema permite que usuários gerenciem suas receitas e despesas de forma segura através de autenticação JWT.

---

## 📋 Sobre o Projeto

A Finance API foi criada para permitir que cada usuário tenha controle total sobre suas movimentações financeiras, mantendo os dados protegidos através de autenticação e autorização.

Cada usuário possui acesso apenas às suas próprias transações, garantindo privacidade e segurança.

---

## 🛠 Tecnologias Utilizadas

* Node.js
* Express
* Sequelize
* MySQL
* JWT (JSON Web Token)
* bcrypt
* Zod
* Express Rate Limit

---

## ✨ Funcionalidades

### 🔐 Autenticação

* Cadastro de usuários
* Login com JWT
* Senhas criptografadas com bcrypt
* Rotas protegidas por autenticação

### 💸 Transações Financeiras

* Criar transações
* Listar transações
* Atualizar transações
* Excluir transações
* Filtrar transações por categoria

### 🔒 Segurança

* JWT para autenticação
* bcrypt para criptografia de senhas
* Rate Limit para proteção contra spam e brute force
* Middleware global para tratamento de erros
* Validação de dados com Zod

---

## 📂 Estrutura do Banco de Dados

### 👤 Usuários

| Campo    | Tipo    |
| -------- | ------- |
| id       | Integer |
| nome     | String  |
| email    | String  |
| password | String  |

### 💸 Transações

| Campo     | Tipo          |
| --------- | ------------- |
| id        | Integer       |
| titulo    | String        |
| valor     | Decimal       |
| tipo      | Entrada/Saída |
| categoria | String        |
| UsuarioId | Integer       |

---

## 🔐 Regras de Negócio

* Cada usuário pode visualizar apenas suas próprias transações.
* Usuários não podem editar transações de outros usuários.
* Usuários não podem excluir transações de outros usuários.
* Todas as rotas de transações exigem autenticação JWT.

---

## 📌 Endpoints

### Usuários

| Método | Rota      | Descrição      |
| ------ | --------- | -------------- |
| POST   | /register | Criar usuário  |
| POST   | /login    | Realizar login |

### Transações

| Método | Rota                              | Descrição             |
| ------ | --------------------------------- | --------------------- |
| POST   | /transaction                     | Criar transação       |
| GET    | /transaction                     | Listar transações     |
| PUT    | /transaction/:id                 | Atualizar transação   |
| DELETE | /transaction/:id                 | Excluir transação     |
| GET    | /transaction/categoria           | Filtrar por categoria |

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone github.com/yJeanx11x/Finance-API.git
```

Instale as dependências:

```bash
npm install
```

Configure o arquivo `.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=finance_api

SECRET=sua_chave_jwt
```

Execute o projeto:

```bash
npm start
```

---

## 🎯 Objetivos do Projeto

Este projeto foi desenvolvido com foco em:

* APIs REST
* Autenticação JWT
* Relacionamentos com Sequelize
* Boas práticas de backend
* Segurança de aplicações
* Organização em arquitetura MVC

---

## 👨‍💻 Autor

Jean Lucas de Souza Araújo

Estudante de Engenharia de Software e Desenvolvedor Backend em formação, focado em Node.js, JavaScript, Express, Sequelize e MySQL.
