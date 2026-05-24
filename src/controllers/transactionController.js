const trasaction = require('../models/Transaction')

async function transactions(req, res, next) {

    try {
        const saldo = await trasaction.findOne({ where: trasaction.saldo })
        if (saldo == null){
            return res.status(200).json({message:'Nenhum registro de trasferencia'})
        }
            return res.status(200).json(saldo)

    } catch (error) {
        next(error)
    }

}

async function transactionsMony(req,res,next) {
    
try {
    

    
} catch (error) {
    next(error)
}

}

module.exports={transactions,}