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
app.get('/new', (req, res) => {
    res.render('new.ejs')
})

//SHOW ROUTE
app.get('/:id', (req, res) => {
    Spells.findById(req.params.id).then((found) => {
        res.render('show.ejs', {show: found})
    })
})


//EDIT ROUTE
app.get('/:id/edit', (req, res) => {
    Spells.findById(req.params.id).then((foundEdit) => {
        res.render('edit.ejs', {
            editSpell: foundEdit
        })
    })
})

//===================================================
// ACTION ROUTES
//===================================================

//POST REQUEST
app.post('/', (req, res) => {
    Spells.create(req.body).then((createdSpell) => {
        res.redirect('/')
    })
})

//PUT REQUEST
app.put('/:id', (req, res) => {
    Spells.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(() => {
        res.redirect('/')
    })
})

//DELETE REQUEST
app.delete('/:id', (req, res) => {
    Spells.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/')
    })
})

//===================================================
//CONNECTIONS
//===================================================
mongoose.connect('mongodb://localhost:27017/dnd_codex').then(() => {
    console.log('connection with mongo established');
})

app.listen(port, () => {
    console.log('listening');
})