💡 Projeto: Finance API

Uma API de controle financeiro pessoal com autenticação JWT.

🧠 O QUE O SISTEMA FAZ

O usuário poderá:

[x] criar conta
[x] fazer login
[x] adicionar ganhos
[] adicionar despesas
[] categorizar gastos
[] visualizar saldo
[x] editar transações
[x] deletar transações

📂 ESTRUTURA DAS TABELAS
👤 Usuário
[x] id
[x] nome
[x] email
[x] password
💸 Transações
[x] id
[x] titulo
[x] valor
[x] tipo (entrada/saída)
[x] categoria
[x] data
[x] UsuarioId
🔐 REGRAS IMPORTANTES
🚨 Cada usuário só vê os próprios dados
UsuarioId = req.user.id

🚨 Usuário não pode editar transação de outro
🚨 JWT obrigatório nas rotas
📌 FUNCIONALIDADES
🔐 Autenticação
 [x] Registro
 [x] Login
 [x] JWT
💸 Transações
 [x] Criar
 [x] Listar
 [x] Atualizar
 [x] Deletar
📊 Extras (DIFERENCIAL)
 [] Filtrar por categoria
 [] Filtrar por data
 [] Buscar saldo total
 [] Paginação
🛡️ SEGURANÇA
 [x] bcrypt
 [x] JWT
 [x] Rate limit
 [x] Middleware global
 [x] Zod