
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


module.exports=transaction