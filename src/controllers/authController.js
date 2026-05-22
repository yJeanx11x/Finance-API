// Banco de dados
const {User} = require('../models/user')
const trasaction = require('../models/Transaction')

// Autentificação zod
const userSchemas = require('../schemas/userSchema')


async function register(req, res, next) {
    const { nome, email, password } = req.body
    const z = userSchemas.safeParse(req.body)
    
    try {
    
       await User.create({
            nome: z.data.nome,
            email: z.data.email,
            password: z.data.password
        })
        return res.status(200).json({ message: 'Usuário criado com sucesso' })

    } catch (error) {
        next(error)
        
    }

}

module.exports = {register} 