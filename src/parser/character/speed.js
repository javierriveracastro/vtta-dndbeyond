import DICTIONARY from "../dictionary.js";
import utils from "../../utils.js";
import { isArmored } from "./ac.js";

export function getSpeed(data) {
  // For all processing, we take into account the regular movement types of this character
  let movementTypes = {};
  for (let type in data.character.race.weightSpeeds.normal) {
    if (data.character.race.weightSpeeds.normal[type] !== 0) {
      movementTypes[type] = data.character.race.weightSpeeds.normal[type];
    }
  }

  // get bonus speed mods
  let restriction = ["", null];
  // Check for equipped Heavy Armor
  const wearingHeavy = data.character.inventory.some((item) => item.equipped && item.definition.type === "Heavy Armor");
  // Accounts for Barbarian Class Feature - Fast Movement
  if (!wearingHeavy) restriction.push("while you aren’t wearing heavy armor");

  const bonusSpeed = utils
    .filterBaseModifiers(data, "bonus", "speed", restriction)
    .reduce((speed, feat) => speed + feat.value, 0);

  // loop over speed types and add and racial bonuses and feat modifiers
  for (let type in movementTypes) {
    // is there a 'inntate-speed-[type]ing' race/class modifier?
    let innateSpeeds = data.character.modifiers.race.filter(
      (modifier) => modifier.type === "set" && modifier.subType === `innate-speed-${type}ing`
    );
    let base = movementTypes[type];

    innateSpeeds.forEach((speed) => {
      // take the highest value
      if (speed.value > base) {
        base = speed.value;
      }
    });
    // overwrite the (perhaps) changed value
    movementTypes[type] = base + bonusSpeed;
  }

  // unarmored movement for barbarians and monks
  if (!isArmored(data)) {
    data.character.modifiers.class
      .filter((modifier) => modifier.type === "bonus" && modifier.subType === "unarmored-movement")
      .forEach((bonusSpeed) => {
        for (let type in movementTypes) {
          movementTypes[type] += bonusSpeed.value;
        }
      });
  }

  // is there a custom seed over-ride?
  if (data.character.customSpeeds) {
    data.character.customSpeeds.forEach((speed) => {
      const type = DICTIONARY.character.speeds.find((s) => s.id === speed.movementId).type;
      movementTypes[type] = speed.distance;
    });
  }

  let special = "";
  for (let type in movementTypes) {
    if (type !== "walk") {
      special += utils.capitalize(type) + " " + movementTypes[type] + " ft, ";
    }
  }
  special = special.substr(0, special.length - 2);

  return {
    value: movementTypes.walk + " ft",
    special: special,
  };
}
