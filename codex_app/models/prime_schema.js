const mongoose = require("mongoose");

const primeSchema = new mongoose.Schema({
  //CHARACTER
  character: {type: String},
  //STATS
  stats: {
    abilityScores: {},
    hitPoints: {},
    ac: Number,
    initiative: Number,
    speed: Number,
    skills: {},
    languages: [],
    proficiencies: [],
  },
  //SPELLS
  spells: {
    spellName: String,
    level: String,
    spellType: String,
    castingTime: String,
    range: String,
    components: String,
    duration: String,
    description: String,
    atHigherLevels: String,
    shortDescription: String,
    userNotes: String,
  },
  //ITEMS
  items: {
    itemName: String,
    damage: String,
    weight: String,
    properties: Array,
  },
});

const primeCollection = mongoose.model("Prime", primeSchema);

module.exports = primeCollection;
