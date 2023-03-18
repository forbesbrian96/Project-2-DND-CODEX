module.exports = 
{
  //CHARACTER SEED
  character: "Brian",
  //STAT SEED
  stats: {
    abilityScores: {
      strength: 9,
      dexterity: 9,
      constitution: 16,
      intelligence: 9,
      wisdom: 16,
      charisma: 20,
    },
    hitPoints: {
      current: 73,
      max: 73,
      temp: 0,
    },
    ac: 16,
    initiative: -1,
    speed: 30,
    skills: {
      acrobatics: -1,
      animalHandling: 3,
      arcana: -1,
      athletics: -1,
      deception: 5,
      history: -1,
      insight: 6,
      intimidation: 5,
      investigation: -1,
      medicine: 6,
      nature: -1,
      perception: 3,
      performance: 5,
      persuasion: 8,
      religion: 2,
      sleightOfHand: -1,
      stealth: -1,
      survival: 3,
    },
    languages: ["Common", "Elvish", "Draconic", "Celestial"],
    proficiencies: [
      "Light Armor",
      "Medium Armor",
      "Heavy Armor",
      "Shields",
      "Simple Weapons",
    ],
  },

  //ITEM SEED
  items: {
    itemName: "Trident",
    damage: "1d6 piercing",
    weight: "4 lbs.",
    properties: ["Thrown (range 20/60)", "Versatile (1d8)"],
  },
}


