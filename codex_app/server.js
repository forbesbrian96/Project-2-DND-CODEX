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

//***************************************************************** */
//***************************************************************** */
// ITEMS
//***************************************************************** */
//***************************************************************** */

//===================================================
// GET ROUTES
//===================================================

//SEED ROUTE
// app.get('/spells/seed', (req, res) => {
//     Spells.create(Seed).then((spell) => {
//         res.send(spell)
//     })
// })

//INDEX ROUTE



//FORM ROUTE


//SHOW ROUTE



//EDIT ROUTE


//===================================================
// ACTION ROUTES
//===================================================

//POST REQUEST


//PUT REQUEST


//DELETE REQUEST


//***************************************************************** */
//***************************************************************** */
// SPELLS
//***************************************************************** */
//***************************************************************** */

//===================================================
// GET ROUTES
//===================================================

//SEED ROUTE
// app.get('/spells/seed', (req, res) => {
//     Spells.create(Seed).then((spell) => {
//         res.send(spell)
//     })
// })

//INDEX ROUTE
app.get('/spells', (req, res) => {
    Spells.find({}).then((foundSpell) => {
        res.render('spell_index.ejs', {spell: foundSpell})
    })
})


//FORM ROUTE
app.get('/spells/new', (req, res) => {
    res.render('spell_new.ejs')
})

//SHOW ROUTE
app.get('/spells/:id', (req, res) => {
    Spells.findById(req.params.id).then((found) => {
        res.render('spell_show.ejs', {show: found})
    })
})


//EDIT ROUTE
app.get('/spells/:id/edit', (req, res) => {
    Spells.findById(req.params.id).then((foundEdit) => {
        res.render('spell_edit.ejs', {
            editSpell: foundEdit
        })
    })
})

//===================================================
// ACTION ROUTES
//===================================================

//POST REQUEST
app.post('/spells/', (req, res) => {
    Spells.create(req.body).then((createdSpell) => {
        res.redirect('/spells')
    })
})

//PUT REQUEST
app.put('/spells/:id', (req, res) => {
    Spells.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(() => {
        res.redirect('/spells')
    })
})

//DELETE REQUEST
app.delete('/spells/:id', (req, res) => {
    Spells.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/spells')
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