const dataBase = require('../config/dataBase')

const User =dataBase.sequelize.define('User',
    {
        UsuarioId: {
            type: dataBase.Sequelize.INTEGER
        },

        nome: {
            type: dataBase.Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: dataBase.Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: dataBase.Sequelize.STRING,
            allowNull: false
        },
        token: {
            type: dataBase.Sequelize.TEXT,
            allowNull: true
        }


    }

)

async function syncDatabase() {
    try {
      await User.sync({ force: false });
        
    } catch (error) {
        console.error('Erro ao sincronizar banco:',error)
    }
}

syncDatabase()
