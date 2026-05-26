require('dotenv').config()
// Banco de dados
const { User } = require('../models/user')
const trasaction = require('../models/Transaction')
// criptografia de senha 
const bcrypt = require('bcrypt')

//json web token
const jwt = require('jsonwebtoken')


// Autentificação zod
const userSchemas = require('../schemas/userSchema')


// Função de registro de usuário
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

async function login(req, res, next) {
    const { email, password } = req.body
    try {
        const userDb = await User.findOne({ where: { email } })
        const comparePassword = await bcrypt.compare(password, userDb.password)
        const secret = process.env.JWT_SECRET


        if (!userDb) {
            return res.status(404).json({ message: 'email não cadastrado' })
        }
        if (!comparePassword) {
            return res.status(404).json({ message: 'Senha incorreta' })

        }

        const token = jwt.sign({
            id: userDb.id
        }, secret, { expiresIn: '1h' })
        userDb.token = token
        await userDb.save()
        return res.status(200).json({ token })

    } catch (error) {
        next(error)
    }



}


module.exports = { register, login } 