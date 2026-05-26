const { where } = require('sequelize')
const trasaction = require('../models/Transaction')


async function transactions(req, res, next) {

    try {
        const saldo = await trasaction.findOne({ where: trasaction.saldo })
        if (saldo == null) {
            return res.status(200).json({ message: 'Nenhum registro de trasferencia' })
        }
        return res.status(200).json(saldo)

    } catch (error) {
        next(error)
    }

}

async function newTransaction(req, res, next) {
    const { titulo, valor, tipo, categoria } = req.body

    try {
        await trasaction.create({

            titulo: titulo,
            valor: valor,
            tipo: tipo,
            categoria: categoria,

            UsuarioId: req.userDb.id
        })

        return res.status(201).json({ message: 'Trasferencia com sucesso',valorTotal })
    } catch (error) {
        next(error)
    }

}

module.exports = { transactions, newTransaction }