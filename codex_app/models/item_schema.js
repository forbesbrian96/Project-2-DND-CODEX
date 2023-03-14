const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: String,
    damage: String,
    weight: String,
    properties: Array
})

const itemCollection = mongoose.model('Items', itemSchema)

module.exports = itemCollection