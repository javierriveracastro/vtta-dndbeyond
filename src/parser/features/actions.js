import DICTIONARY from "../dictionary.js";
import utils from "../../utils.js";
import parseTemplateString from "../templateStrings.js";

function isMartialArtists(classes) {
  return classes.some((cls) => cls.classFeatures.some((feature) => feature.definition.name === "Martial Arts"));
}

function martialArtsDamage(ddb, action) {
  const damageType = DICTIONARY.actions.damageType.find((type) => type.id === action.damageTypeId).name;

  // are we dealing with martial arts?
  if (action.isMartialArts && isMartialArtists(ddb.character.classes)) {
    const die = ddb.character.classes
      .filter((cls) => isMartialArtists([cls]))
      .map((cls) => {
        const feature = cls.classFeatures.find((feature) => feature.definition.name === "Martial Arts");

        if (feature && feature.levelScale && feature.levelScale.dice && feature.levelScale.dice.diceString) {
          return feature.levelScale.dice.diceString;
        } else if (action.dice !== null) {
          // On some races bite is considered a martial art, damage
          // is different and on the action itself
          return action.dice.diceString;
        } else {
          return "1";
        }
      });

    // set the weapon damage
    return {
      parts: [[die + " + @mod", damageType]],
      versatile: "",
    };
  } else if (action.dice !== null) {
    // The Lizardfolk jaws have a different base damage, its' detailed in
    // dice so lets capture that for actions if it exists
    return {
      parts: [[action.dice.diceString + " + @mod", damageType]],
      versatile: "",
    };
  } else {
    // default to basics
    return {
      parts: [["1 + @mod", damageType]],
      versatile: "",
    };
  }
}

function getLimitedUse(action, character) {
  if (action.limitedUse && (action.limitedUse.maxUses || action.limitedUse.statModifierUsesId)) {
    const resetType = DICTIONARY.resets.find((type) => type.id === action.limitedUse.resetType);

    let maxUses;
    if (action.limitedUse.statModifierUsesId) {
      const ability = DICTIONARY.character.abilities.find(
        (ability) => ability.id === action.limitedUse.statModifierUsesId
      ).value;
      maxUses = character.data.abilities[ability].mod;
    } else {
      maxUses = action.limitedUse.maxUses;
    }
    return {
      value: maxUses - action.limitedUse.numberUsed,
      max: maxUses,
      per: resetType ? resetType.value : "",
    };
  } else {
    return {};
  }
}

function getDescription(ddb, character, action) {
  const snippet = action.snippet ? parseTemplateString(ddb, character, action.snippet, action) : "";
  const description = action.description ? parseTemplateString(ddb, character, action.description, action) : "";
  return {
    value: description !== "" ? description + (snippet !== "" ? "<h3>Summary</h3>" + snippet : "") : snippet,
    chat: snippet,
    unidentified: "",
  };
}

function getActivation(action) {
  if (action.activation) {
    const actionType = DICTIONARY.actions.activationTypes.find((type) => type.id === action.activation.activationType);
    const activation = !actionType
      ? {}
      : {
          type: actionType.value,
          cost: action.activation.activationTime || 1,
          condition: "",
        };
    return activation;
  }
  return {};
}

function getAttackAction(ddb, character, action) {
  let weapon = {
    name: action.name,
    type: "weapon",
    data: JSON.parse(utils.getTemplate("weapon")),
  };
  try {
    if (action.isMartialArts) {
      weapon.flags = {
        vtta: {
          dndbeyond: {
            type: "Martial Arts",
          },
        },
      };
    }

    weapon.data.proficient = action.isProficient ? 1 : 0;
    weapon.data.description = getDescription(ddb, character, action);
    weapon.data.equipped = true;
    weapon.data.rarity = "common";
    weapon.data.identified = true;
    weapon.data.activation = getActivation(action);

    if (action.range && action.range.aoeType && action.range.aoeSize) {
      weapon.data.range = { value: null, units: "self", long: null };
      weapon.data.target = {
        value: action.range.aoeSize,
        type: DICTIONARY.actions.aoeType.find((type) => type.id === action.range.aoeType).value,
        units: "ft",
      };
    } else if (action.range && action.range.range) {
      weapon.data.range = {
        value: action.range.range,
        units: "ft.",
        long: action.range.long || "",
      };
    } else {
      weapon.data.range = { value: 5, units: "ft.", long: "" };
    }

    weapon.data.ability =
      action.isMartialArts && isMartialArtists(ddb.character.classes)
        ? character.data.abilities.dex.value >= character.data.abilities.str.value
          ? "dex"
          : "str"
        : "str";

    // lets see if we have a save stat for things like Dragon born Breath Weapon
    if (action.saveStatId) {
      const damageType = DICTIONARY.actions.damageType.find((type) => type.id === action.damageTypeId).name;
      weapon.data.actionType = "save";
      weapon.data.damage = {
        parts: [[action.dice.diceString, damageType]],
        versatile: "",
      };
      weapon.data.save = {
        ability: DICTIONARY.character.abilities.find((stat) => stat.id === action.saveStatId).value,
        dc: null,
        scaling: "spell",
      };
      weapon.data.ability = DICTIONARY.character.abilities.find(
        (stat) => stat.id === action.abilityModifierStatId
      ).value;
    } else {
      weapon.data.actionType = "mwak";
      weapon.data.damage = martialArtsDamage(ddb, action);
    }

    weapon.data.uses = getLimitedUse(action, character);
  } catch (err) {
    utils.log(
      `Unable to Import Attack Action: ${action.name}, please log a bug report. Err: ${err.message}`,
      "extension"
    );
  }

  return weapon;
}

/**
 * Everyone has an Unarmed Strike
 * @param {*} ddb
 */
function getUnarmedStrike(ddb, character) {
  const unarmedStrikeMock = {
    limitedUse: null,
    name: "Unarmed Strike",
    description: null,
    snippet:
      "Instead of using a weapon to make a melee weapon attack, you can use an unarmed strike: a punch, kick, head-butt, or similar forceful blow (none of which count as weapons). On a hit, an unarmed strike deals bludgeoning damage equal to 1 + your Strength modifier. You are proficient with your unarmed strikes.",
    abilityModifierStatId: null,
    attackTypeRange: 1,
    actionType: 1,
    attackSubtype: 3,
    dice: null,
    value: 1,
    damageTypeId: 1,
    isMartialArts: true,
    isProficient: true,
    displayAsAttack: true,
    range: {
      range: null,
      longRange: null,
      aoeType: null,
      aoeSize: null,
      hasAoeSpecialDescription: false,
    },
    activation: {
      activationTime: 1,
      activationType: 1,
    },
  };
  const unarmedStrike = getAttackAction(ddb, character, unarmedStrikeMock);
  return unarmedStrike;
}

/**
 * Try and parse attack actions - this will at the moment only really support basic melee attacks
 * @param {*} ddb
 * @param {*} character
 */
function getAttackActions(ddb, character) {
  return [ddb.character.actions.class, ddb.character.actions.race, ddb.character.actions.feat]
    .flat()
    .filter((action) => action.displayAsAttack && action.displayAsAttack === true)
    .map((action) => {
      return getAttackAction(ddb, character, action);
    });
}

/**
 * Lets Parse remaining actions
 * @param {*} ddb
 * @param {*} items
 */
function getOtherActions(ddb, character, items) {
  const actions = [ddb.character.actions.race, ddb.character.actions.class, ddb.character.actions.feat]
    .flat()
    .filter(
      (action) =>
        // lets grab other actions and add, make sure we don't get attack based ones that haven't parsed
        !action.displayAsAttack ||
        (action.displayAsAttack === true && !items.some((attack) => attack.name === action.name))
    )
    .map((action) => {
      let feat = {
        name: action.name,
        type: "feat",
        data: JSON.parse(utils.getTemplate("feat")),
      };
      feat.data.activation = getActivation(action);
      feat.data.description = getDescription(ddb, character, action);
      feat.data.uses = getLimitedUse(action, character);

      return feat;
    });

  // FUTURE ENHANCEMENT: We maybe able to look up other entities here to get details for things like Sneak Attack
  return actions;
}

export default function parseActions(ddb, character) {
  let actions = [
    // Get Attack Actions that we know about, typically natural attacks etc
    ...getAttackActions(ddb, character),
    // Everyone has an Unarmed Strike
    getUnarmedStrike(ddb, character),
  ];
  actions = [
    ...actions,
    // Try and parse other relevant actions
    ...getOtherActions(ddb, character, actions),
  ];

  // sort alphabetically, then by action type
  actions.sort().sort((a, b) => {
    if (!a.data.activation.activationType) {
      return 1;
    } else if (!b.data.activation.activationType) {
      return -1;
    } else {
      const aActionTypeID = DICTIONARY.actions.activationTypes.find(
        (type) => type.value === a.data.activation.activationType
      ).id;
      const bActionTypeID = DICTIONARY.actions.activationTypes.find(
        (type) => type.value === b.data.activation.activationType
      ).id;
      if (aActionTypeID > bActionTypeID) {
        return 1;
      } else if (aActionTypeID < bActionTypeID) {
        return -1;
      } else {
        return 0;
      }
    }
  });

  // console.log(JSON.stringify(actions));
  return actions;
}
