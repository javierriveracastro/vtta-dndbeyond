const DICTIONARY = {
  numbers: [
    { num: 1, natural: "a" },
    { num: 1, natural: "one" },
    { num: 2, natural: "two" },
    { num: 3, natural: "three" },
    { num: 4, natural: "four" },
    { num: 5, natural: "five" },
    { num: 6, natural: "six" },
    { num: 7, natural: "seven" },
    { num: 8, natural: "eight" },
    { num: 9, natural: "nine" },
    { num: 10, natural: "ten" },
    { num: 11, natural: "eleven" },
    { num: 12, natural: "twelve" },
    { num: 13, natural: "thirteen" },
    { num: 14, natural: "fourteen" },
    { num: 15, natural: "fifteen" },
    { num: 16, natural: "sixteen" },
    { num: 17, natural: "seventeen" },
    { num: 18, natural: "eighteen" },
    { num: 19, natural: "nineteen" },
    { num: 20, natural: "twenty" },
  ],
  magicitems: {
    rechargeUnits: [
      { id: 1, value: "r4" },
      { id: "ShortRest", value: "r4" },
      { id: 2, value: "r5" },
      { id: "LongRest", value: "r5" },
      { id: "Dawn", value: "r2" },
      { id: "Consumable", value: "" },
      { id: "Other", value: "" },
      { id: "Daily", value: "r1" },
      { id: "sr", value: "r4" },
      { id: "lr", value: "r5" },
    ],
    nums: [
      { id: "once", value: 1 },
      { id: "twice", value: 2 },
      { id: "thrice", value: 3 },
      { id: "one", value: 1 },
      { id: "two", value: 2 },
      { id: "three", value: 3 },
    ],
  },
  resets: [
    { id: 1, value: "sr" },
    { id: "ShortRest", value: "sr" },
    { id: 2, value: "lr" },
    { id: "LongRest", value: "lr" },
    { id: "Dawn", value: "day" },
    { id: "Consumable", value: "charges" },
    { id: "Other", value: "charges" },
  ],
  character: {
    abilities: [
      { id: 1, value: "str", long: "strength" },
      { id: 2, value: "dex", long: "dexterity" },
      { id: 3, value: "con", long: "constitution" },
      { id: 4, value: "int", long: "intelligence" },
      { id: 5, value: "wis", long: "wisdom" },
      { id: 6, value: "cha", long: "charisma" },
    ],
    skills: [
      { name: "acr", label: "Acrobatics", ability: "dex", subType: "acrobatics", valueId: 3 },
      { name: "ani", label: "Animal Handling", ability: "wis", subType: "animal-handling", valueId: 11 },
      { name: "arc", label: "Arcana", ability: "int", subType: "arcana", valueId: 6 },
      { name: "ath", label: "Athletics", ability: "str", subType: "athletics", valueId: 2 },
      { name: "dec", label: "Deception", ability: "cha", subType: "deception", valueId: 16 },
      { name: "his", label: "History", ability: "int", subType: "history", valueId: 7 },
      { name: "ins", label: "Insight", ability: "wis", subType: "insight", valueId: 12 },
      { name: "itm", label: "Intimidation", ability: "cha", subType: "intimidation", valueId: 17 },
      { name: "inv", label: "Investigation", ability: "int", subType: "investigation", valueId: 8 },
      { name: "med", label: "Medicine", ability: "wis", subType: "medicine", valueId: 13 },
      { name: "nat", label: "Nature", ability: "int", subType: "nature", valueId: 9 },
      { name: "prc", label: "Perception", ability: "wis", subType: "perception", valueId: 14 },
      { name: "prf", label: "Performance", ability: "cha", subType: "performance", valueId: 18 },
      { name: "per", label: "Persuasion", ability: "cha", subType: "persuasion", valueId: 19 },
      { name: "rel", label: "Religion", ability: "int", subType: "religion", valueId: 10 },
      { name: "slt", label: "Sleight of Hand", ability: "dex", subType: "sleight-of-hand", valueId: 4 },
      { name: "ste", label: "Stealth", ability: "dex", subType: "stealth", valueId: 5 },
      { name: "sur", label: "Survival", ability: "wis", subType: "survival", valueId: 15 },
    ],
    customSkillProficiencies: [
      // typeId:26
      // value not: 1, half 2, prof: 3, expertise 4
      { value: 1, proficient: 0 },
      { value: 2, proficient: 0.5 },
      { value: 3, proficient: 1 },
      { value: 4, proficient: 2 },
    ],
    alignments: [
      { id: 1, name: "Lawful Good", value: "lg" },
      { id: 2, name: "Neutral Good", value: "ng" },
      { id: 3, name: "Chaotic Good", value: "cg" },
      { id: 4, name: "Lawful Neutral", value: "ln" },
      { id: 5, name: "True Neutral", value: "tn" },
      { id: 6, name: "Chaotic Neutral", value: "cn" },
      { id: 7, name: "Lawful Evil", value: "le" },
      { id: 8, name: "Neutral Evil", value: "ne" },
      { id: 9, name: "Chaotic Evil", value: "ce" },
    ],
    actorSizes: [
      { id: 2, name: "Tiny", value: "tiny" }, // wild guess
      { id: 3, name: "Small", value: "sm" }, // consistent
      { id: 4, name: "Medium", value: "med" }, // consistent
      { id: 5, name: "Large", value: "lg" }, // wild guess
      { id: 6, name: "Huge", value: "huge" }, // wild guess
      { id: 7, name: "Gargantuan", value: "grg" }, // wild guess
    ],
    senses: [
      { id: 1, name: "Blindsight" },
      { id: 2, name: "Darkvision" },
      { id: 3, name: "Tremorsense" },
      { id: 4, name: "Truesight" },
    ],
    speeds: [
      { id: 1, type: "walk" },
      { id: 2, type: "burrow" },
      { id: 3, type: "climb" },
      { id: 4, type: "fly" },
      { id: 5, type: "swim" },
    ],
    languages: [
      { name: "Common", value: "common" },
      { name: "Aarakocra", value: "aarakocra" },
      { name: "Abyssal", value: "abyssal" },
      { name: "Aquan", value: "aquan" },
      { name: "Auran", value: "auran" },
      { name: "Celestial", value: "celestial" },
      { name: "Deep Speech", value: "deep" },
      { name: "Draconic", value: "draconic" },
      { name: "Druidic", value: "druidic" },
      { name: "Dwarvish", value: "dwarvish" },
      { name: "Elvish", value: "elvish" },
      { name: "Giant", value: "giant" },
      { name: "Gith", value: "gith" },
      { name: "Gnomish", value: "gnomish" },
      { name: "Goblin", value: "goblin" },
      { name: "Gnoll", value: "gnoll" },
      { name: "Halfling", value: "halfling" },
      { name: "Ignan", value: "ignan" },
      { name: "Infernal", value: "infernal" },
      { name: "Orc", value: "orc" },
      { name: "Primordial", value: "primordial" },
      { name: "Terran", value: "terran" },
      { name: "Sylvan", value: "sylvan" },
      { name: "Thieves' Cant", value: "cant" },
      { name: "Undercommon", value: "undercommon" },
    ],
    armorTypes: [
      { name: "Clothing", value: "clothing" },
      { name: "Light Armor", value: "light" },
      { name: "Medium Armor", value: "medium" },
      { name: "Heavy Armor", value: "heavy" },
      { name: "Magical Bonus", value: "bonus" },
      { name: "Natural Armor", value: "natural" },
      { name: "Shield", value: "shield" },
    ],
    damageTypes: [
      { id: 1, type: 2, kind: "resistance", name: "Bludgeoning", value: "bludgeoning" },
      { id: 2, type: 2, kind: "resistance", name: "Piercing", value: "piercing" },
      { id: 3, type: 2, kind: "resistance", name: "Slashing", value: "slashing" },
      { id: 4, type: 2, kind: "resistance", name: "Lightning", value: "lightning" },
      { id: 5, type: 2, kind: "resistance", name: "Thunder", value: "thunder" },
      { id: 6, type: 2, kind: "resistance", name: "Poison", value: "poison" },
      { id: 7, type: 2, kind: "resistance", name: "Cold", value: "cold" },
      { id: 8, type: 2, kind: "resistance", name: "Radiant", value: "radiant" },
      { id: 9, type: 2, kind: "resistance", name: "Fire", value: "fire" },
      { id: 10, type: 2, kind: "resistance", name: "Necrotic", value: "necrotic" },
      { id: 11, type: 2, kind: "resistance", name: "Acid", value: "acid" },
      { id: 12, type: 2, kind: "resistance", name: "Psychic", value: "psychic" },
      { id: 17, type: 2, kind: "immunity", name: "Bludgeoning", value: "bludgeoning" },
      { id: 18, type: 2, kind: "immunity", name: "Piercing", value: "piercing" },
      { id: 19, type: 2, kind: "immunity", name: "Slashing", value: "slashing" },
      { id: 20, type: 2, kind: "immunity", name: "Lightning", value: "lightning" },
      { id: 21, type: 2, kind: "immunity", name: "Thunder", value: "thunder" },
      { id: 22, type: 2, kind: "immunity", name: "Poison", value: "poison" },
      { id: 23, type: 2, kind: "immunity", name: "Cold", value: "cold" },
      { id: 24, type: 2, kind: "immunity", name: "Radiant", value: "radiant" },
      { id: 25, type: 2, kind: "immunity", name: "Fire", value: "fire" },
      { id: 26, type: 2, kind: "immunity", name: "Necrotic", value: "necrotic" },
      { id: 27, type: 2, kind: "immunity", name: "Acid", value: "acid" },
      { id: 28, type: 2, kind: "immunity", name: "Psychic", value: "psychic" },
      { id: 33, type: 2, kind: "vulnerability", name: "Bludgeoning", value: "bludgeoning" },
      { id: 34, type: 2, kind: "vulnerability", name: "Piercing", value: "piercing" },
      { id: 35, type: 2, kind: "vulnerability", name: "Slashing", value: "slashing" },
      { id: 36, type: 2, kind: "vulnerability", name: "Lightning", value: "lightning" },
      { id: 37, type: 2, kind: "vulnerability", name: "Thunder", value: "thunder" },
      { id: 38, type: 2, kind: "vulnerability", name: "Poison", value: "poison" },
      { id: 39, type: 2, kind: "vulnerability", name: "Cold", value: "cold" },
      { id: 40, type: 2, kind: "vulnerability", name: "Radiant", value: "radiant" },
      { id: 41, type: 2, kind: "vulnerability", name: "Fire", value: "fire" },
      { id: 42, type: 2, kind: "vulnerability", name: "Necrotic", value: "necrotic" },
      { id: 43, type: 2, kind: "vulnerability", name: "Acid", value: "acid" },
      { id: 44, type: 2, kind: "vulnerability", name: "Psychic", value: "psychic" },
      { id: 47, type: 2, kind: "resistance", name: "Force", value: "force" },
      { id: 48, type: 2, kind: "immunity", name: "Force", value: "force" },
      { id: 49, type: 2, kind: "vulnerability", name: "Force", value: "force" },
      { id: 51, type: 2, kind: "resistance", name: "Ranged attacks" },
      { id: 52, type: 2, kind: "resistance", name: "Damage dealt by traps" },
      { id: 54, type: 2, kind: "resistance", name: "Bludgeoning from non magical attacks" },

      { id: 1, type: 1, kind: "immunity", name: "Blinded", value: "blinded" },
      { id: 2, type: 1, kind: "immunity", name: "Charmed", value: "charmed" },
      { id: 3, type: 1, kind: "immunity", name: "Deafened", value: "deafened" },
      { id: 4, type: 1, kind: "immunity", name: "Exhaustion", value: "exhaustion" },
      { id: 5, type: 1, kind: "immunity", name: "Frightened", value: "frightened" },
      { id: 6, type: 1, kind: "immunity", name: "Grappled", value: "grappled" },
      { id: 7, type: 1, kind: "immunity", name: "Incapacitated", value: "incapacitated" },
      { id: 8, type: 1, kind: "immunity", name: "Invisible", value: "invisible" },
      { id: 9, type: 1, kind: "immunity", name: "Paralyzed", value: "paralyzed" },
      { id: 10, type: 1, kind: "immunity", name: "Petrified", value: "petrified" },
      { id: 11, type: 1, kind: "immunity", name: "Poisoned", value: "poisoned" },
      { id: 12, type: 1, kind: "immunity", name: "Prone", value: "prone" },
      { id: 13, type: 1, kind: "immunity", name: "Restrained", value: "restrained" },
      { id: 14, type: 1, kind: "immunity", name: "Stunned", value: "stunned" },
      { id: 15, type: 1, kind: "immunity", name: "Unconscious", value: "unconscious" },
      // In DDB it is disease, but in FVTT ut is diseased
      { id: 16, type: 1, kind: "immunity", name: "Diseased", value: "disease", vttaValue: "diseased" },
    ],
    proficiencies: [
      // Armor
      { name: "Studded Leather", type: "Armor", subType: "Light Armor" },
      { name: "Scale Mail", type: "Armor", subType: "Medium Armor" },
      { name: "Shield", type: "Armor", subType: "Shield" },
      { name: "Padded", type: "Armor", subType: "Light Armor" },
      { name: "Leather", type: "Armor", subType: "Light Armor" },
      { name: "Hide", type: "Armor", subType: "Medium Armor" },
      { name: "Chain Shirt", type: "Armor", subType: "Medium Armor" },
      { name: "Breastplate", type: "Armor", subType: "Medium Armor" },
      { name: "Half Plate", type: "Armor", subType: "Medium Armor" },
      { name: "Ring Mail", type: "Armor", subType: "Heavy Armor" },
      { name: "Chain Mail", type: "Armor", subType: "Heavy Armor" },
      { name: "Splint", type: "Armor", subType: "Heavy Armor" },
      { name: "Plate", type: "Armor", subType: "Heavy Armor" },
      { name: "Spiked Armor", type: "Armor", subType: "Medium Armor" },

      // Weapons
      { name: "Crossbow, Hand", type: "Weapon", subType: "Martial Weapon" },
      { name: "Glaive", type: "Weapon", subType: "Martial Weapon" },
      { name: "Dagger", type: "Weapon", subType: "Simple Weapon" },
      { name: "Longsword", type: "Weapon", subType: "Martial Weapon" },
      { name: "Club", type: "Weapon", subType: "Simple Weapon" },
      { name: "Greatclub", type: "Weapon", subType: "Simple Weapon" },
      { name: "Handaxe", type: "Weapon", subType: "Simple Weapon" },
      { name: "Javelin", type: "Weapon", subType: "Simple Weapon" },
      { name: "Light Hammer", type: "Weapon", subType: "Simple Weapon" },
      { name: "Mace", type: "Weapon", subType: "Simple Weapon" },
      { name: "Quarterstaff", type: "Weapon", subType: "Simple Weapon" },
      { name: "Sickle", type: "Weapon", subType: "Simple Weapon" },
      { name: "Spear", type: "Weapon", subType: "Simple Weapon" },
      { name: "Crossbow, Light", type: "Weapon", subType: "Simple Weapon" },
      { name: "Dart", type: "Weapon", subType: "Simple Weapon" },
      { name: "Shortbow", type: "Weapon", subType: "Simple Weapon" },
      { name: "Sling", type: "Weapon", subType: "Simple Weapon" },
      { name: "Battleaxe", type: "Weapon", subType: "Martial Weapon" },
      { name: "Flail", type: "Weapon", subType: "Martial Weapon" },
      { name: "Greataxe", type: "Weapon", subType: "Martial Weapon" },
      { name: "Greatsword", type: "Weapon", subType: "Martial Weapon" },
      { name: "Halberd", type: "Weapon", subType: "Martial Weapon" },
      { name: "Lance", type: "Weapon", subType: "Martial Weapon" },
      { name: "Maul", type: "Weapon", subType: "Martial Weapon" },
      { name: "Morningstar", type: "Weapon", subType: "Martial Weapon" },
      { name: "Pike", type: "Weapon", subType: "Martial Weapon" },
      { name: "Rapier", type: "Weapon", subType: "Martial Weapon" },
      { name: "Scimitar", type: "Weapon", subType: "Martial Weapon" },
      { name: "Shortsword", type: "Weapon", subType: "Martial Weapon" },
      { name: "Trident", type: "Weapon", subType: "Martial Weapon" },
      { name: "War Pick", type: "Weapon", subType: "Martial Weapon" },
      { name: "Warhammer", type: "Weapon", subType: "Martial Weapon" },
      { name: "Whip", type: "Weapon", subType: "Martial Weapon" },
      { name: "Blowgun", type: "Weapon", subType: "Martial Weapon" },
      { name: "Crossbow, Heavy", type: "Weapon", subType: "Martial Weapon" },
      { name: "Longbow", type: "Weapon", subType: "Martial Weapon" },
      { name: "Net", type: "Weapon", subType: "Martial Weapon" },
      { name: "Boomerang", type: "Weapon", subType: "Simple Weapon" },
      { name: "Yklwa", type: "Weapon", subType: "Simple Weapon" },
      { name: "Pistol", type: "Weapon", subType: "Martial Weapon" },
      { name: "Musket", type: "Weapon", subType: "Martial Weapon" },
      { name: "Pistol, Automatic", type: "Weapon", subType: "Martial Weapon" },
      { name: "Revolver", type: "Weapon", subType: "Martial Weapon" },
      { name: "Rifle, Hunting", type: "Weapon", subType: "Martial Weapon" },
      { name: "Rifle, Automatic", type: "Weapon", subType: "Martial Weapon" },
      { name: "Shotgun", type: "Weapon", subType: "Martial Weapon" },
      { name: "Laser Pistol", type: "Weapon", subType: "Martial Weapon" },
      { name: "Antimatter Rifle", type: "Weapon", subType: "Martial Weapon" },
      { name: "Laser Rifle", type: "Weapon", subType: "Martial Weapon" },
      { name: "Double-Bladed Scimitar", type: "Weapon", subType: "Martial Weapon" },
      { name: "Revenant Double-Bladed Scimitar", type: "Weapon", subType: "Martial Weapon" },
      { name: "Ammunition", type: "Weapon", subType: "Simple Weapon" },

      // Tools and Instruments and Stuff
      { name: "Carpenter's Tools", type: "Tool", subType: "Artisan's Tools" },
      { name: "Cartographer's Tools", type: "Tool", subType: "Artisan's Tools" },
      { name: "Cobbler's Tools", type: "Tool", subType: "Artisan's Tools" },
      { name: "Cook's Utensils", type: "Tool", subType: "Artisan's Tools" },
      { name: "Glassblower's Tools", type: "Tool", subType: "Artisan's Tools" },
      { name: "Jeweler's Tools", type: "Tool", subType: "Artisan's Tools" },
      { name: "Leatherworker's Tools", type: "Tool", subType: "Artisan's Tools" },
      { name: "Mason's Tools", type: "Tool", subType: "Artisan's Tools" },
      { name: "Navigator's Tools", type: "Tool", subType: "Artisan's Tools" },
      { name: "Potter's Tools", type: "Tool", subType: "Artisan's Tools" },
      { name: "Smith's Tools", type: "Tool", subType: "Artisan's Tools" },
      { name: "Thieves' Tools", type: "Tool", subType: "Artisan's Tools" },
      { name: "Tinker's Tools", type: "Tool", subType: "Artisan's Tools" },
      { name: "Weaver's Tools", type: "Tool", subType: "Artisan's Tools" },
      { name: "Woodcarver's Tools", type: "Tool", subType: "Artisan's Tools" },
      { name: "Dice Set", type: "Tool", subType: "Gaming Set" },
      { name: "Dragonchess Set", type: "Tool", subType: "Gaming Set" },
      { name: "Playing Card Set", type: "Tool", subType: "Gaming Set" },
      { name: "Three-Dragon Ante Set", type: "Tool", subType: "Gaming Set" },
      { name: "Disguise Kit", type: "Tool", subType: "Kit" },
      { name: "Forgery Kit", type: "Tool", subType: "Kit" },
      { name: "Herbalism Kit", type: "Tool", subType: "Kit" },
      { name: "Poisoner's Kit", type: "Tool", subType: "Kit" },
      { name: "Bagpipes", type: "Tool", subType: "Musical Instrument" },
      { name: "Birdpipes", type: "Tool", subType: "Musical Instrument" },
      { name: "Drum", type: "Tool", subType: "Musical Instrument" },
      { name: "Dulcimer", type: "Tool", subType: "Musical Instrument" },
      { name: "Flute", type: "Tool", subType: "Musical Instrument" },
      { name: "Glaur", type: "Tool", subType: "Musical Instrument" },
      { name: "Hand Drum", type: "Tool", subType: "Musical Instrument" },
      { name: "Horn", type: "Tool", subType: "Musical Instrument" },
      { name: "Longhorn", type: "Tool", subType: "Musical Instrument" },
      { name: "Lute", type: "Tool", subType: "Musical Instrument" },
      { name: "Lyre", type: "Tool", subType: "Musical Instrument" },
      { name: "Pan Flute", type: "Tool", subType: "Musical Instrument" },
      { name: "Shawm", type: "Tool", subType: "Musical Instrument" },
      { name: "Songhorn", type: "Tool", subType: "Musical Instrument" },
      { name: "Tantan", type: "Tool", subType: "Musical Instrument" },
      { name: "Thelarr", type: "Tool", subType: "Musical Instrument" },
      { name: "Tocken", type: "Tool", subType: "Musical Instrument" },
      { name: "Viol", type: "Tool", subType: "Musical Instrument" },
      { name: "Wargong", type: "Tool", subType: "Musical Instrument" },
      { name: "Yarting", type: "Tool", subType: "Musical Instrument" },
      { name: "Zulkoon", type: "Tool", subType: "Musical Instrument" },
      { name: "Alchemist's Supplies", type: "Tool", subType: "Supplies" },
      { name: "Brewer's Supplies", type: "Tool", subType: "Supplies" },
      { name: "Calligrapher's Supplies", type: "Tool", subType: "Supplies" },
      { name: "Painter's Supplies", type: "Tool", subType: "Supplies" },
    ],
    characterValuesLookup: [
      { name: "pactWeapon", typeId: 28, valueTypeId: 1439493548 },
      { name: "hexWarrior", typeId: 29, valueTypeId: 1439493548 },
    ],
    // Supported Warlock Pact Weapon options
    pactFeatures: ["Improved Pact Weapon", "Lifedrinker"],
  },
  item: {
    characterValues: [
      { typeId: 8, value: "name" },
      //   { typeId: 9, value: 'notes'},  // note: Not supported by Foundry right now, skipping
      { typeId: 19, value: "price" },
      { typeId: 22, value: "weight" },
    ],
  },
  equipment: {
    armorType: [
      { name: "Clothing", value: "clothing" },
      { name: "Light Armor", value: "light" },
      { name: "Medium Armor", value: "medium" },
      { name: "Heavy Armor", value: "heavy" },
      { name: "Magical Bonus", value: "bonus" },
      { name: "Natural Armor", value: "natural" },
      { name: "Shield", value: "shield" },
    ],
    armorTypeID: [
      { name: "Light Armor", id: 1 },
      { name: "Medium Armor", id: 2 },
      { name: "Heavy Armor", id: 3 },
      { name: "Shield", id: 4 },
      { name: "Unarmored", id: 0 },
      { name: "Unarmored Defense", id: -1 },
      { name: "Natural Armor", id: -2 },
    ],
  },
  weapon: {
    weaponType: [
      { categoryId: 1, attackType: 1, value: "simpleM" },
      { categoryId: 1, attackType: 2, value: "simpleR" },
      { categoryId: 2, attackType: 1, value: "martialM" },
      { categoryId: 2, attackType: 2, value: "martialR" },

      { categoryId: 3, attackType: 2, value: "martialR" }, // this is not 100% correct. a martialF for "Martial Firearms" would be better
      { categoryId: 0, attackType: null, value: "simpleR" }, // this is totally incorrect, this is of type ammunition
    ],
    properties: [
      { name: "Ammunition", value: "amm" },
      { name: "Ammunition (Firearms)", value: "amm" },
      { name: "Finesse", value: "fin" },
      { name: "Heavy", value: "hvy" },
      { name: "Light", value: "lgt" },
      { name: "Loading", value: "rel" },
      { name: "Range", value: "fir" },
      { name: "Reach", value: "rch" },
      { name: "Reload", value: "rel" },
      { name: "Special", value: "spc" },
      { name: "Thrown", value: "thr" },
      { name: "Two-Handed", value: "two" },
      { name: "Versatile", value: "ver" },
    ],
  },
  actions: {
    activationTypes: [
      { id: 0, value: "none" },
      { id: 1, value: "action" },
      { id: 2, value: "action" },
      { id: 3, value: "bonus" },
      { id: 4, value: "reaction" },
      { id: 5, value: "action" },
      { id: 6, value: "minute" },
      { id: 7, value: "hour" },
      { id: 8, value: "special" },
    ],
    damageType: [
      { name: "bludgeoning", id: 1 },
      { name: "piercing", id: 2 },
      { name: "slashing", id: 3 },
      { name: "", id: 4 },
      { name: "acid", id: 5 },
      { name: "cold", id: 6 },
      { name: "fire", id: 7 },
      { name: "lightning", id: 8 },
      { name: "", id: 9 },
      { name: "poison", id: 10 },
      { name: "psychic", id: 11 },
      { name: "", id: 12 },
      // thunder
      // radiant
      // necrotic
    ],
    aoeType: [
      { id: 1, value: "cone" },
      // presumably others here too! add when found
    ],
  },
  spell: {
    progression: [
      { name: "Artificer", value: "artificer" },
      { name: "Artificer (UA)", value: "artificer" },
      { name: "Bard", value: "full" },
      { name: "Barbarian", value: "none" },
      { name: "Blood Hunter", value: "pact" },
      { name: "Blood Hunter (archived)", value: "pact" },
      { name: "Cleric", value: "full" },
      { name: "Druid", value: "full" },
      { name: "Fighter", value: "third" },
      { name: "Hunter", value: "half" },
      { name: "Paladin", value: "half" },
      { name: "Ranger", value: "half" },
      { name: "Rogue", value: "third" },
      { name: "Sorcerer", value: "full" },
      { name: "Warlock", value: "pact" },
      { name: "Wizard", value: "full" },
      { name: "Monk", value: "none" },
    ],
    preparationModes: [
      { name: "Artificer", value: "prepared" },
      { name: "Artificer (UA)", value: "prepared" },
      { name: "Bard", value: "always" },
      { name: "Blood Hunter", value: "pact" },
      { name: "Blood Hunter (archived)", value: "pact" },
      { name: "Cleric", value: "prepared" },
      { name: "Druid", value: "prepared" },
      { name: "Fighter", value: "always" },
      { name: "Hunter", value: "always" },
      { name: "Paladin", value: "prepared" },
      { name: "Ranger", value: "always" },
      { name: "Rogue", value: "always" },
      { name: "Sorcerer", value: "always" },
      { name: "Warlock", value: "pact" },
      { name: "Wizard", value: "prepared" },
      { name: "Monk", value: "always" },
    ],
    activationTypes: [
      { activationType: 0, value: "none" },
      { activationType: 1, value: "action" },
      { activationType: 2, value: "action" },
      { activationType: 3, value: "bonus" },
      { activationType: 4, value: "reaction" },
      { activationType: 5, value: "action" },
      { activationType: 6, value: "minute" },
      { activationType: 7, value: "hour" },
      { activationType: 8, value: "special" },
    ],
  },
  sources: [
    { id: null, name: "System Reference Document (SRD)" },
    { id: 1, name: "Players Handbook" },
    { id: 2, name: "Players Handbook" },
    { id: 3, name: "Dungeon Master's Guide" },
    { id: 6, name: "Curse of Strahd" },
    { id: 7, name: "Hoard of the Dragon Queen" },
    { id: 8, name: "Lost Mine of Phandelver" },
    { id: 9, name: "Out of the Abyss" },
    { id: 10, name: "Princes of the Apocalypse" },
    { id: 11, name: "Rise of Tiamat" },
    { id: 12, name: "Storm King's Thunder" },
    { id: 13, name: "Sword Coast Adventurer's Guide" },
    { id: 15, name: "Volo's Guide to Monsters" },
    { id: 16, name: "The Sunless Citadel" },
    { id: 21, name: "Against the Giants" },
    { id: 22, name: "Tomb of Horrors" },
    { id: 25, name: "Tomb of Annihilation" },
    { id: 27, name: "Xanathar's Guide to Everything" },
    { id: 29, name: "Unearthed Arcana" },
    { id: 33, name: "Xanathar's Guide to Everything" },
    { id: 35, name: "Waterdeep Dragon Heist" },
    { id: 36, name: "Waterdeep Dungeon of the Mad Mage" },
    { id: 37, name: "Wayfinder's Guide to Eberron" },
    { id: 38, name: "Guildmasters' Guide to Ravnica" },
    { id: 39, name: "Guildmasters' Guide to Ravnica" },
    { id: 40, name: "Lost Laboratory of Kwalish" },
    { id: 44, name: "Acquisitions Incorporated" },
    { id: 48, name: "Baldur's Gate: Descent into Avernus" },
    { id: 49, name: "Eberron: Rising from the Last War" },
    { id: 59, name: "Explorer's Guide to Wildemount" },
    //
    // { id: n, name: "One Grung Above" },
    // { id: n, name: "The Tortle Package" },
    // { id: n, name: "Monster Manual" },
  ],
};

export default DICTIONARY;
