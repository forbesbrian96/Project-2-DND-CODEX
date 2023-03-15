module.exports = {
  //CHARACTER SEED
  name: "Brian",
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
    intiative: -1,
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
  //SPELL SEED
  spells: {
    name: "Fireball",
    level: "3rd Level",
    spellType: "Evocation",
    castingTime: "1 action",
    range: "150 feet",
    components: "V, S, M (a tiny ball of bat guano and sulfur)",
    duration: "Instantaneous",
    description: `A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.`,
    atHigherLevels: `When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.`,
    shortDescription:
      "Cast a ball of fire up to 150ft, creating a 20-foot-radius-sphere for a DEX save. 8d6 on failed save, or half on successful.",
    userNotes: "",
  },
  //ITEM SEED
  items: {
    name: "Trident",
    damage: "1d6 piercing",
    weight: "4 lbs.",
    properties: ["Thrown (range 20/60)", "Versatile (1d8)"],
  },
};
