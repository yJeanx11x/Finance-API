// Banco de dados
const { User } = require('../models/user')
const trasaction = require('../models/Transaction')
// criptografia de senha 
const bcrypt = require('bcrypt')
// Autentificação zod
const userSchemas = require('../schemas/userSchema')


async function register(req, res, next) {
    const { nome, email, password } = req.body
    const z = userSchemas.safeParse(req.body)

    const senhaHash = await bcrypt.hash(password, 12)

    try {
        await User.create({
            nome: z.data.nome,
            email: z.data.email,
            password: senhaHash
        })
        return res.status(200).json({ message: 'Usuário criado com sucesso' })

    } catch (error) {
        next(error)

    }

}

module.exports = { register } 