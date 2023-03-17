//DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()
const PrimeSeed = require('./models/prime_seed')
const Prime = require('./models/prime_schema')

//CONFIGURATION
const port = 3000
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))

//***************************************************************** */
//***************************************************************** */
// PRIME
//***************************************************************** */
//***************************************************************** */

//SEED ROUTE
app.get('/codex/seed', (req, res) => {
    Prime.create(PrimeSeed).then((character) => {
        res.send(character)
    })
})

//===================================================
// GET ROUTES
//===================================================

//INDEX ROUTE
app.get('/', (req, res) => {
    Prime.find({}).then((found) => {
        res.render('prime_index.ejs', {index: found})
    })
})


//FORM ROUTE
app.get('/spells/new', (req, res) => {
    res.render('spell_new.ejs')
})

//SHOW ROUTE
app.get('/:id', (req, res) => {
    Prime.findById(req.params.id).then((found) => {
        res.render('prime_show.ejs', {show: found})
    })
})


//EDIT ROUTE
app.get('/:id/edit', (req, res) => {
    Prime.findById(req.params.id).then((foundEdit) => {
        res.render('prime_edit.ejs', {
            edit: foundEdit
        })
    })
})

//===================================================
// ACTION ROUTES
//===================================================

//POST REQUEST
app.post('/spells', (req, res) => {
    Prime.create(req.body).then((createdSpell) => {
        res.redirect('/spells')
    })
})

//PUT REQUEST
app.put('/:id', (req, res) => {
    Prime.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(() => {
        res.redirect('/')
    })
})

//DELETE REQUEST
app.delete('/spells/:id', (req, res) => {
    Prime.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/spells')
    })
})

// //***************************************************************** */
// //***************************************************************** */
// // CHARACTER
// //***************************************************************** */
// //***************************************************************** */

// //SEED ROUTE
// app.get('/character/seed', (req, res) => {
//     Prime.create(PrimeSeed).then((character) => {
//         res.send(character)
//     })
// })

// //INDEX ROUTE
// app.get('/character', (req, res) => {
//     Prime.find({}).then((foundCharacter) => {
//         res.render('character_index.ejs', {character: foundCharacter})
//     })
// })


// //SHOW ROUTE
// app.get('/character/:id', (req, res) => {
//     Prime.findById(req.params.id).then((found) => {
//         res.render('character_show.ejs', {character: found})
//     })
// })


// //***************************************************************** */
// //***************************************************************** */
// // STATS
// //***************************************************************** */
// //***************************************************************** */

// //INDEX ROUTE
// app.get('/character/:id/stats', (req, res) => {
//     Prime.find({}).then((foundStat) => {
//         res.render('stat_index.ejs', {stat: foundStat})
//     })
// })


// //***************************************************************** */
// //***************************************************************** */
// // ITEMS
// //***************************************************************** */
// //***************************************************************** */

// //===================================================
// // GET ROUTES
// //===================================================

// //INDEX ROUTE
// app.get('/items', (req, res) => {
//     Prime.find({}).then((foundItem) => {
//         res.render('item_index.ejs', {item: foundItem})
//     })
// })


// //FORM ROUTE
// app.get('/items/new', (req, res) => {
//     res.render('item_new.ejs')
// })

// //SHOW ROUTE
// app.get('/items/:id', (req, res) => {
//     Prime.findById(req.params.id).then((found) => {
//         res.render('item_show.ejs', {show: found})
//     })
// })


// //EDIT ROUTE
// app.get('/items/:id/edit', (req, res) => {
//     Prime.findById(req.params.id).then((foundEdit) => {
//         res.render('item_edit.ejs', {editItem: foundEdit})
//     })
// })


// //===================================================
// // ACTION ROUTES
// //===================================================

// //POST REQUEST
// app.post('/items', (req, res) => {
//     Prime.create(req.body).then((createdItem) => {
//         res.redirect('/items')
//     })
// })

// //PUT REQUEST
// app.put('/items/:id', (req, res) => {
//     Prime.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(() => {
//         res.redirect('/items')
//     })
// })

// //DELETE REQUEST
// app.delete('/items/:id', (req, res) => {
//     Prime.findByIdAndRemove(req.params.id).then(() => {
//         res.redirect('/items')
//     })
// })

// //***************************************************************** */
// //***************************************************************** */
// // SPELLS
// //***************************************************************** */
// //***************************************************************** */

// //===================================================
// // GET ROUTES
// //===================================================

// //INDEX ROUTE
// app.get('/spells', (req, res) => {
//     Prime.find({}).then((foundSpell) => {
//         res.render('spell_index.ejs', {spell: foundSpell})
//     })
// })


// //FORM ROUTE
// app.get('/spells/new', (req, res) => {
//     res.render('spell_new.ejs')
// })

// //SHOW ROUTE
// app.get('/spells/:id', (req, res) => {
//     Prime.findById(req.params.id).then((found) => {
//         res.render('spell_show.ejs', {show: found})
//     })
// })


// //EDIT ROUTE
// app.get('/spells/:id/edit', (req, res) => {
//     Prime.findById(req.params.id).then((foundEdit) => {
//         res.render('spell_edit.ejs', {
//             editSpell: foundEdit
//         })
//     })
// })

// //===================================================
// // ACTION ROUTES
// //===================================================

// //POST REQUEST
// app.post('/spells', (req, res) => {
//     Prime.create(req.body).then((createdSpell) => {
//         res.redirect('/spells')
//     })
// })

// //PUT REQUEST
// app.put('/spells/:id', (req, res) => {
//     Prime.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(() => {
//         res.redirect('/spells')
//     })
// })

// //DELETE REQUEST
// app.delete('/spells/:id', (req, res) => {
//     Prime.findByIdAndRemove(req.params.id).then(() => {
//         res.redirect('/spells')
//     })
// })

//===================================================
//CONNECTIONS
//===================================================
mongoose.connect('mongodb://localhost:27017/dnd_codex').then(() => {
    console.log('connection with mongo established');
})

app.listen(port, () => {
    console.log('listening');
})