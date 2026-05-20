
const db = require('../config/dataBase')

const transaction = db.sequelize.define('Transacao', {
    UsuarioId: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },

    titulo: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    valor: {
        type: db.Sequelize.FLOAT,
        allowNull: false
    },

    tipo: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    categoria: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
})

async function syncTransac() {
    try {
        await transaction.sync({ force: false })

        console.log('Tabela "Transacao" sincronizada com sucesso.')

    } catch (error) {
        console.error('Erro ao sincronizar a tabela "Transacao":', error)
    }
}

syncTransac()

module.exports=transaction