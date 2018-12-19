module.exports = (sequelize, type) => {
  const Persona = sequelize.define('persona', {
    nombre: {
      type: type.STRING
    },
    apellidos: {
      type: type.STRING
    },
    telefono: {
      type: type.STRING
    }
  },{
    timestamps: true
  })
  return Persona
}