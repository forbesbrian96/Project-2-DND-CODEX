const mongoose = require("mongoose");

const spellSchema = new mongoose.Schema({

  //SPELLS
  spells: 
  {
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

});

const spellCollection = mongoose.model("Spell", spellSchema);

module.exports = spellCollection;
