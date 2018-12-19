const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const {Persona} = require('./sequelize')

app.get('/personas', (req, res) => {
  Persona.findAll()
    .then(personas => {
      res.json(personas)    
    })
})

app.post('/personas/nuevo', (req, res) => {
  console.log(req.body)
  Persona.create({
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    telefono: req.body.telefono
  }). then(() => {
    res.json('Persona creada')
  })
})

app.get('/personas/:id', (req, res) => {
  let personaId = req.params.id
  Persona.findOne({ where: {id: personaId} })
    .then(persona => {
      res.json(persona)
    })
})

app.put('/personas/:id', (req, res) => {
  let personaId = req.params.id
  let nuevosDatos = req.body
  Persona.findOne({ where: { id: personaId } })
    .then(persona => {
      persona.update(nuevosDatos)
        .then(nuevaPersona => {
          res.json(nuevaPersona)
        })
    })
})

app.delete('/personas/:id', (req, res) => {
  let personaId = req.params.id

  Persona.destroy({
    where: { id: personaId }
  }).then(() => {
    res.json('Persona Eliminada')
  })
})

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`)
})