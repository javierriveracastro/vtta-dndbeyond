import DICTIONARY from "../dictionary.js";
import utils from "../../utils.js";

export function getProficiencies(data) {
  let sections = [];
  for (let section in data.character.modifiers) {
    sections.push(data.character.modifiers[section]);
  }

  let proficiencies = [];
  sections.forEach((section) => {
    let entries = section.filter((entry) => entry.type === "proficiency");
    proficiencies = proficiencies.concat(entries);
  });

  proficiencies = proficiencies.map((proficiency) => {
    return { name: proficiency.friendlySubtypeName };
  });

  return proficiencies;
}


export function getArmorProficiencies(data, character) {
  let values = [];
  let custom = [];

  // lookup the characters's proficiencies in the DICT
  let allProficiencies = DICTIONARY.character.proficiencies.filter((prof) => prof.type === "Armor");
  character.flags.vtta.dndbeyond.proficiencies.forEach((prof) => {
    if (prof.name === "Light Armor" && !values.includes("lgt")) {
      values.push("lgt");
    }
    if (prof.name === "Medium Armor" && !values.includes("med")) {
      values.push("med");
    }
    if (prof.name === "Heavy Armor" && !values.includes("hvy")) {
      values.push("hvy");
    }
    if (prof.name === "Shields" && !values.includes("shl")) {
      values.push("shl");
    }
    if (allProficiencies.find((p) => p.name === prof.name) !== undefined && !custom.includes(prof.name)) {
      custom.push(prof.name);
    }
  });

  return {
    value: [...new Set(values)],
    custom: [...new Set(custom)].join(";"),
  };
}

//
// DND5E.toolProficiencies = {
// "art": "Artisan's Tools",
// "disg": "Disguise Kit",
// "forg": "Forgery Kit",
// "game": "Gaming Set",
// "herb": "Herbalism Kit",
// "music": "Musical Instrument",
// "navg": "Navigator's Tools",
// "pois": "Poisoner's Kit",
// "thief": "Thieves' Tools",
// "vehicle": "Vehicle (Land or Water)"
// };
//
export function getToolProficiencies(data, character) {
  let values = [];
  let custom = [];

  // lookup the characters's proficiencies in the DICT
  let allToolProficiencies = DICTIONARY.character.proficiencies
    .filter((prof) => prof.type === "Tool")
    .map((prof) => {
      return prof.name;
    });

  character.flags.vtta.dndbeyond.proficiencies.forEach((prof) => {
    // Some have values we can match too in VTTA, others have to be custom imported
    switch (prof.name) {
      case "Artisan's Tools":
        values.push("art");
        break;
      case "Disguise Kit":
        values.push("disg");
        break;
      case "Forgery Kit":
        values.push("forg");
        break;
      case "Gaming Set":
        values.push("game");
        break;
      case "Musical Instrument":
        values.push("music");
        break;
      case "Thieves' Tools":
        values.push("thief");
        break;
      case "Navigator's Tools":
        values.push("navg");
        break;
      case "Poisoner's Kit":
        values.push("pois");
        break;
      case "Vehicle (Land or Water)":
      case "Vehicle (Land)":
      case "Vehicle (Water)":
        values.push("vehicle");
        break;
      default:
        if (allToolProficiencies.includes(prof.name)) custom.push(prof.name);
    }
  });

  // Custom proficiencies!
  data.character.customProficiencies.forEach((proficiency) => {
    if (proficiency.type === 2) {
      // type 2 is TOOL, 1 is SKILL, 3 is LANGUAGE
      custom.push(proficiency.name);
    }
  });

  return {
    value: [...new Set(values)],
    custom: [...new Set(custom)].join(";"),
  };
}

export function getWeaponProficiencies(data, character) {
  let values = [];
  let custom = [];

  // lookup the characters's proficiencies in the DICT
  let allProficiencies = DICTIONARY.character.proficiencies.filter((prof) => prof.type === "Weapon");
  character.flags.vtta.dndbeyond.proficiencies.forEach((prof) => {
    if (prof.name === "Simple Weapons" && !values.includes("sim")) {
      values.push("sim");
    }
    if (prof.name === "Martial Weapons" && !values.includes("mar")) {
      values.push("mar");
    }
    if (allProficiencies.find((p) => p.name === prof.name) !== undefined && !custom.includes(prof.name)) {
      custom.push(prof.name);
    }
  });

  return {
    value: [...new Set(values)],
    custom: [...new Set(custom)].join("; "),
  };
}

export function getLanguages(data) {
  let languages = [];
  let custom = [];

  const modifiers = utils.filterBaseModifiers(data, "language");

  modifiers.forEach((language) => {
    let result = DICTIONARY.character.languages.find((lang) => lang.name === language.friendlySubtypeName);
    if (result) {
      languages.push(result.value);
    } else {
      custom.push(language.friendlySubtypeName);
    }
  });

  data.character.customProficiencies.forEach((proficiency) => {
    if (proficiency.type === 3) {
      // type 3 is LANGUAGE, 1 is SKILL, 2 is TOOL
      custom.push(proficiency.name);
    }
  });

  return {
    value: languages,
    custom: custom.map((entry) => utils.capitalize(entry)).join(", "),
  };
}
