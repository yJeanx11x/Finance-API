require('dotenv').config()
const jwt = require('jsonwebtoken')
const { User } = require('../models/user')

async function verificarToken(req, res, next) {
    const authHeader  = req.headers['authorization']
    const token = authHeader  && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: 'Acesso negado' })
    }
    try {
        const secret = process.env.JWT_SECRET

        const decoded = jwt.verify(token,secret)

        const userDb = await User.findByPk(decoded.id)

        if (!userDb) {
            return res.status(401).json({ message: 'Usuário não encontrado!' })
        }
        if (userDb.token !== token) {
            return res.status(401).json({ message: 'Token antigo !' })

        }
        req.userDb = userDb
        next()
        
    } catch (error) {
        return res.status(401).json({ message: 'Token invalido !' })
    }

}

module.exports = {verificarToken}