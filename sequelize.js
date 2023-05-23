const Sequelize = require('sequelize')

const PersonaModel = require('./models/Persona')
const DBURL = 'postgres://cgcbqkzl:TiJJw_zY5MPmM1xfhhpm-5-t9N07oSm9@baasu.db.elephantsql.com:5432/cgcbqkzl'

const sequelize = new Sequelize(DBURL)

const Persona = PersonaModel(sequelize, Sequelize)

sequelize.sync()
  .then(() => {
    console.log('Tablas Creadas')
  })

module.exports = {
  Persona
}