
const { where } = require('sequelize')
const trasaction = require('../models/Transaction')

const transactionSchema = require('../schemas/transactionSchema')

//Listar todas as trasferencias
async function transactions(req, res, next) {

    try {
        const saldo = await trasaction.findAll({ where: { UsuarioId: req.userDb.id }, attributes: ["titulo", "valor", "tipo", "categoria"] })
        if (saldo == null) {
            return res.status(200).json({ message: 'Nenhum registro de trasferencia' })
        }
        return res.status(200).json(saldo)

    } catch (error) {
        next(error)
    }

}
//Criar nova trasferencia
async function newTransaction(req, res, next) {
    const { titulo, valor, tipo, categoria } = req.body
    const z = transactionSchema.safeParse(req.body)


    try {
        await trasaction.create({

            titulo: z.data.titulo,
            valor: z.data.valor,
            tipo: z.data.tipo,
            categoria: z.data.categoria,

            UsuarioId: req.userDb.id
        })

        return res.status(201).json({ message: 'Trasferencia com sucesso' })
    } catch (error) {
        next(error)
    }

}

//Editar trasferencia
async function editTransaction(req, res, next) {
    const { titulo, valor, tipo, categoria } = req.body
    const { id } = req.params
    const z = transactionSchema.safeParse(req.body)

    try {
        const transaction = await trasaction.findOne({ where: { id, UsuarioId: req.userDb.id } })

        if (!transaction) {
            return res.status(401).json({ message: 'Transação não encontrada' })
        }
        await transaction.update(
            {
                valor: z.data.valor,
                titulo: z.data.titulo,
                tipo: z.data.tipo,
                categoria: z.data.categoria
            }
        )
        return res.status(201).json({ message: 'Atualizado com sucesso' })
    } catch (error) {
        next(error)
    }

}

//Deletar trasferencia
async function deleteTransaction(req, res, next) {
    const { id } = req.params
    try {
        const removeTransaction = await transaction.findOne({ where: { id, UsuarioId: req.userDb.id } })

        if (!removeTransaction) {
            return res.status(404).json({ message: 'Transação não encontrada' })
        }
        await removeTransaction.destroy()

        return res.status(200).json({ message: 'Transação deletada' })

    } catch (error) {
        next(error)
    }
}

// filtrar categoria 
async function filterCategory(req, res, next) {

    const { categoria, datas } = req.body

    try {
        const categorias = await trasaction.findAll({ where: { categoria, UsuarioId: req.userDb.id }, attributes: ['titulo', 'valor', 'categoria'] })

        if (!categorias) {
            return res.status(401).json({ message: `Categoria não encotrada` })
        }
       

        return res.status(200).json(categorias)
    } catch (error) {
        next(error)
    }


}





module.exports = { transactions, newTransaction, editTransaction, deleteTransaction, filterCategory }