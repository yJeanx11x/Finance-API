require('dotenv').config()
const express = require('express')
const app = express()

// Importando as rotas
const routes=require('../routes/Routes')

// Importando o middleware de tratamento de erros global
const erroGlobal = require('../middlewares/middelerwareerro')

app.use(express.json())

// Usando as rotas
app.use(routes)

// Middleware de tratamento de erros global
app.use(erroGlobal)

app.listen(process.env.PORT, () => {
    console.log('Server Rodando com sucesso! :D')
})