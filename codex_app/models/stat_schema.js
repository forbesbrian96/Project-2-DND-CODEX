const mongoose = require('mongoose')

    const statSchema = new mongoose.Schema({
      abilityScores: {},
      hitPoints: {},
      ac: Number,
      intiative: Number,
      speed: Number,
      skills: {},
      languages: [],
      proficiencies: [],
    })
  
const statCollection = mongoose.model('StatsSchema', statSchema)

module.exports = statCollection 