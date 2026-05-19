require('dotenv').config()
const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DB_DIALC
})



async function conectDB() {
    
    try {
      await  sequelize.authenticate();
        console.log('✅ Conexão com banco estabelecida com sucesso.');
    } catch (error) {
        console.log('❌ Erro ao conectar com banco:', error);
    }
}
conectDB()


module.exports = { Sequelize, sequelize:sequelize }