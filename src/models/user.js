const dataBase = require('../config/dataBase')
const transacoes = require('../models/Transaction')

const User = dataBase.sequelize.define('User', {
    nome: {
        type: dataBase.Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: dataBase.Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    password: {
        type: dataBase.Sequelize.STRING,
        allowNull: false
    },

    token: {
        type: dataBase.Sequelize.TEXT,
        allowNull: true
    }
})

User.hasMany(transacoes, {
    foreignKey: 'UsuarioId',
    as: 'transacoes'
})

transacoes.belongsTo(User, {
    foreignKey: 'UsuarioId',
    as: 'usuario'
})

async function syncDatabase() {
    try {
        await User.sync({ force: false })

        await transacoes.sync({ force: false })

        console.log('Banco de dados sincronizado com sucesso.')

    } catch (error) {
        console.error('Erro ao sincronizar o banco de dados:', error)
    }
}

syncDatabase()

module.exports = User