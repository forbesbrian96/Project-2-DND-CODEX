//DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()
const Seed = require('./models/spells')
const Spells = require('./models/spell_schema')

//CONFIGURATION
const port = 3000
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))

//===================================================
// GET ROUTES
//===================================================

//SEED ROUTE
// app.get('/seed', (req, res) => {
//     Spells.create(Seed).then((spell) => {
//         res.send(spell)
//     })
// })

//INDEX ROUTE
app.get('/', (req, res) => {
    Spells.find({}).then((foundSpell) => {
        res.render('index.ejs', {spell: foundSpell})
    })
})


//FORM ROUTE


//SHOW ROUTE


//EDIT ROUTE


//===================================================
// ACTION ROUTES
//===================================================

//POST REQUEST


//PUT REQUEST


//DELETE REQUEST


//===================================================
//CONNECTIONS
//===================================================
mongoose.connect('mongodb://localhost:27017/dnd_codex').then(() => {
    console.log('connection with mongo established');
})

app.listen(port, () => {
    console.log('listening');
})