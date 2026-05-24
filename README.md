💡 Projeto: Finance API

Uma API de controle financeiro pessoal com autenticação JWT.

🧠 O QUE O SISTEMA FAZ

O usuário poderá:

[] criar conta
[] fazer login
[] adicionar ganhos
[] adicionar despesas
[] categorizar gastos
[] visualizar saldo
[] editar transações
[] deletar transações

📂 ESTRUTURA DAS TABELAS
👤 Usuário
id
nome
email
password
💸 Transações
id
titulo
valor
tipo (entrada/saída)
categoria
data
UsuarioId
🔐 REGRAS IMPORTANTES
🚨 Cada usuário só vê os próprios dados


UsuarioId = req.user.id
🚨 Usuário não pode editar transação de outro
🚨 JWT obrigatório nas rotas
📌 FUNCIONALIDADES
🔐 Autenticação
 [x] Registro
 [] Login
 [] JWT
💸 Transações
 [] Criar
 [] Listar
 [] Atualizar
 [] Deletar
📊 Extras (DIFERENCIAL)
 [] Filtrar por categoria
 [] Filtrar por data
 [] Buscar saldo total
 [] Paginação
🛡️ SEGURANÇA
 [x] bcrypt
 [] JWT
 [x] Rate limit
 [x] Middleware global
 [x] Zod