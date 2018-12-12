const Sequelize = require('sequelize')

const PersonaModel = require('./models/Persona')
const DBURL = 'mysql://root:112358@localhost:3306/api-agenda'

const sequelize = new Sequelize(DBURL)

const Persona = PersonaModel(sequelize, Sequelize)

sequelize.sync()
  .then(() => {
    console.log('Tablas Creadas')
  })

module.exports = {
  Persona
}